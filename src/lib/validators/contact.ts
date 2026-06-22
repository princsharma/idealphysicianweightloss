import { contactContent } from "@/lib/constants/contact-content";

export type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[\d\s().+-]{7,20}$/;

const allowedTopics = new Set<string>(contactContent.form.topics);

export function validateContactForm(data: unknown):
  | { success: true; data: ContactFormPayload }
  | { success: false; error: string } {
  if (!data || typeof data !== "object") {
    return { success: false, error: "Invalid request." };
  }

  const record = data as Record<string, unknown>;
  const name = String(record.name ?? "").trim();
  const email = String(record.email ?? "").trim();
  const phone = String(record.phone ?? "").trim();
  const topic = String(record.topic ?? "").trim();
  const message = String(record.message ?? "").trim();

  if (name.length < 2 || name.length > 100) {
    return { success: false, error: "Please enter your full name." };
  }

  if (!emailPattern.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (!phonePattern.test(phone)) {
    return { success: false, error: "Please enter a valid phone number." };
  }

  if (!allowedTopics.has(topic)) {
    return { success: false, error: "Please select a topic." };
  }

  if (message.length < 10 || message.length > 2000) {
    return { success: false, error: "Message must be between 10 and 2000 characters." };
  }

  return { success: true, data: { name, email, phone, topic, message } };
}
