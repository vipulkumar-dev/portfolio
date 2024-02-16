import { Resend } from "resend";
export default function Page() {
  async function create(formData: FormData) {
    "use server";

    const resend = new Resend("re_Y6dR2iax_BZ7NicNCUAEYtXjaCuMAz6rr");

    // await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${"re_Y6dR2iax_BZ7NicNCUAEYtXjaCuMAz6rr"}`,
    //   },
    //   body: JSON.stringify({
    //     from: "vipulkumar13579@gmail.com",
    //     to: "email.coex@gmail.com",
    //     subject: formData.get("subject"),
    //     text: "This works!",
    //   }),
    // });

    await resend.emails.send({
      from: `${formData.get("name")} <onboarding@resend.dev>`,
      to: ["email.coex@gmail.com"],
      subject: formData.get("subject"),
      text: formData.get("text"),
    });
    console.log(formData.get("subject"));
  }
  return (
    <form action={create}>
      <input type="text" name="name" />
      <input type="text" name="subject" />
      <input type="text" name="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
