import { NextResponse } from "next/server";

import { siteConfig } from "@/config/site";
import { validateContactForm } from "@/lib/validators/contact";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const result = validateContactForm(body);

  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const payload = result.data;
  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: siteConfig.name,
          submittedAt: new Date().toISOString(),
          ...payload,
        }),
      });

      if (!webhookResponse.ok) {
        return NextResponse.json(
          { error: "Unable to deliver your message. Please call us instead." },
          { status: 502 },
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Unable to deliver your message. Please try again or call us." },
        { status: 502 },
      );
    }
  } else if (process.env.NODE_ENV === "development") {
    console.info("[contact-form]", payload);
  }

  return NextResponse.json({ ok: true });
}
