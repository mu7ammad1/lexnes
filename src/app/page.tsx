import { Button } from "@/components/ui/button";
import { ArrowRight, CircleDashedIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-end ">
        <div className="flex flex-col gap-3 py-20">
          <h1 className="scroll-m-20 tracking-wider text-4xl md:text-3xl font-medium text-center">
            Good evening, Username
          </h1>
          <h1 className="scroll-m-20 tracking-wider text-3xl md:text-2xl font-medium text-center text-neutral-400">
            How can I help you today?
          </h1>
        </div>

        <div className="flex flex-col w-full max-w-2xl items-center border p-2 rounded-3xl bg-neutral-100 placeholder:text-black dark:bg-secondary border-none">
          <Textarea
            placeholder="Tell us a little bit about Imegin"
            className="border-0 block w-full resize-none shadow-none focus-visible:ring-0 md:text-lg tracking-normal bg-transparent placeholder:text-primary/40"
          />

          <div className="flex items-center w-full justify-between">
            <div className="flex items-center gap-2 justify-between">
              <Button type="submit" variant={"outline"} size={"icon"} className="rounded-full">
                <CircleDashedIcon className="h-6 w-6" style={{ scale: "1.2" }} />
              </Button>
              <Button type="submit" variant={"outline"} size={"default"} className="rounded-full">
                asassas
              </Button>
            </div>
            <Button type="submit" variant={"default"} size={"icon"} className="rounded-full w-auto h-auto p-2">
              <ArrowRight className="h-6 w-6" style={{ scale: "1.2" }} />
            </Button>
          </div>
        </div>
      </main>









    </div>
  );
}
