import React, { useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Animation } from '@/components/Animations/Animation';
import { motion, useInView} from 'framer-motion';
// import ShineBorderWrapper from '@components/ShineBorderWrapper';

export function EmailContact() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-8xl mx-auto pt-4 pb-12">
      <motion.div
        ref={ref}
        className="md:col-span-2 flex items-center justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Animation />
      </motion.div>
      <motion.div
        ref={ref}
        className="md:col-span-1 h-[100%]"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* <ShineBorderWrapper borderWidth={'1'} randomDuration={false}> */}
        <Card className="bg-zinc-950 text-white border border-zinc-600 h-full">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>
              Have a question or want to work together? Fill out the form below and we'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent >
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-white">Name</Label>
                <Input id="name" placeholder="Enter your name" className="bg-zinc-800 text-white border border-zinc-700" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" className="bg-zinc-800 text-white border border-zinc-700" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject" className="text-white">Subject</Label>
                <Input id="subject" placeholder="Enter a subject" className="bg-zinc-800 text-white border border-zinc-700" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea id="message" placeholder="Enter your message" className="bg-zinc-800 text-white border border-zinc-700 min-h-[120px]" />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" className="bg-zinc-700 hover:bg-zinc-600 text-white">Send Message</Button>
          </CardFooter>
        </Card>
        {/* </ShineBorderWrapper> */}
      </motion.div>
    </div>
  );
}
