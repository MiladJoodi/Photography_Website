import { CheckIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/ui/button';

const includedFeatures = [
    'Private forum access',
    'Member Resources',
    'Entry to annual conference',
    'Official member equipment',
]

const Pricing = () => {
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Pricing
        </h2>

        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Memories worth love cherishing
          </h2>
          <p className="mt-6 text-lg leading-8">
            Create the memories & celebrate the magic with Solence - a
            beautifully designed wedding photography theme that has it all.
          </p>
        </div>

        {/* Pricing Data */}
        <div className="mx-auto mt-16 max-w-2xl ring-1 ring-gray-200 rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          {/* Left Section */}
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight">Lifetime Membership</h3>
            <p className="mt-6 text-base leading-7">
              Create the memories & celebrate the magic with Solence - a
              beautifully designed wedding photography theme that has it all.
            </p>
            
            <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
                    What is included
                </h4>
                <div className="h-px flex-auto bg-gray-200"></div>
            </div>

            <ul
            role='list'
            className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'
            >
                {includedFeatures.map((feature)=>(
                    <li
                    key={feature}
                    className='flex text-muted-foreground gap-x-3'
                    >
                        <CheckIcon
                        className='h-6 w-5 flex-none text-primary'
                        aria-hidden="true"
                        />
                        {feature}
                    </li>
                ))}
            </ul>

          </div>

          {/* Right Section */}
          <div>
            <div>
              <div>
                <p>pay once, own it forever</p>
                <p>
                  <span>$349</span>
                  <span>USD</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
