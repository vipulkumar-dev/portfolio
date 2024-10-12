"use server";

import { TFormSchema } from "@/app/contact/page";
import { Resend } from "resend";
import { z } from "zod";

export async function sendEmail(values: TFormSchema) {
  const resend = new Resend("re_L8AunFxe_AW5vS1eBxxpu3E22H1NrPouQ");
  const { data, error } = await resend.emails.send({
    from: `${values.name} <onboarding@resend.dev>`,
    to: ["hello@vipulkumar.dev"],
    subject: "Customer Email",
    text: `Email = ${values.email} \n\nName = ${values.name} \n\nMessage = ${values.message}`,
  });
  if (error) {
    return false;
  }

  return data !== null;
}
