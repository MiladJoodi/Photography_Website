import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { RiMenFill } from "react-icons/ri";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Newsletter = () => {
  return (
    <section>
      <div className="relative bg-tertiary overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <h2 className="text-3xl font-bold tracking-tight section-title sm:text-4xl">
              Need a Photographer?
            </h2>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system.
            </p>

                <div className="mt-6 flex max-w-md gap-x-4">
                    <Input 
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Enter your email"
                    />
                    <Link href="/contact">
                        <Button>
                            Subcribe <RiMenFill size={18} />
                        </Button>
                    </Link>
                </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
