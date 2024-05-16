import { EyeIcon } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { NewProductDrawer } from './new-product-drawer';
import { NewProductForm } from './new-product-form';
import { NewProductPreview } from './new-product-preview';

// Step 1: Define types for props
interface NewProductSheetProps {}

export const NewProductSheet: React.FC<NewProductSheetProps> = () => {
  // Step 2: Add state for preview visibility
  const [showPreview, setShowPreview] = useState<boolean>(true);

  // Step 3: Create a toggle function
  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" variant="default" className="h-8 gap-1">
          New Product
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">
            Create Product
            <NewProductDrawer />
          </SheetTitle>
          <SheetDescription className="text-left">
            Make changes to your profile here. Click save when you are done.
          </SheetDescription>
        </SheetHeader>
        <Button
          onClick={togglePreview}
          variant="secondary"
          className="absolute right-20 top-4 hidden lg:flex"
        >
          <EyeIcon className="mr-2 size-4" />
          <span className="">
            {showPreview ? 'Close Preview' : 'Open Preview'}
          </span>
        </Button>
        {/* <main
          className={cn(
            ' flex-1 gap-4 overflow-auto p-4',
            showPreview ? 'grid  md:grid-cols-2 lg:grid-cols-3' : '',
          )}
        > */}
        <main className="flex w-full gap-4 overflow-auto p-4  ">
          {/* <div className="relative hidden flex-col items-start gap-8 md:flex"> */}
          <NewProductForm />
          {/* </div> */}
          {showPreview && (
            <div className="  hidden h-full min-h-[50vh] rounded-xl  bg-muted/50 p-4 lg:flex">
              <NewProductPreview />
            </div>
          )}
        </main>
        <SheetFooter>
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
          {/* Step 4: Add a toggle button */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
