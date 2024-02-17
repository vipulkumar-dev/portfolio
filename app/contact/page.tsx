"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Resend } from "resend";
import { sendEmail } from "@/actions/sendEmail";
import { Header } from "@/components/header";
import { HeaderNavigation } from "@/components/headerNavigation";
import { Footer } from "@/components/contactSection/footer";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "This field has to be filled.",
  }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),

  message: z.string().min(1, { message: "This field has to be filled." }),
});

export type TFormSchema = z.infer<typeof formSchema>;

export default function ProfileForm() {
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onMyFormSubmit = async (data: z.infer<typeof formSchema>) => {
    await sendEmail(data);
  };

  return (
    <>
      <Header color="Light"></Header>
      <HeaderNavigation />
      <main className="darkGradient relative flex  w-full flex-col items-center justify-center px-paddingX py-paddingY text-3xl text-colorLight">
        <h1 className="mb-[1em] text-[12.2vw] leading-[0.9] tracking-tight md:text-[clamp(16px,_6.3vw_+_8px,_120px)]">
          Let's start a <br /> project together
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onMyFormSubmit)}
            className="w-full space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className=" ">
                  <FormLabel>What's your name?</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What's your email?</FormLabel>
                  <FormControl>
                    <Input placeholder="yourname123@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="border-b">
                  <FormLabel>Your message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-[10em] "
                      placeholder="Type your message here"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="!mb-[2em] h-auto w-auto rounded-full bg-colorLight px-[2em] py-[1em] text-colorDark"
            >
              Submit
            </Button>
          </form>
        </Form>
        <Footer className="bottom-0"></Footer>
      </main>
    </>
  );
}
