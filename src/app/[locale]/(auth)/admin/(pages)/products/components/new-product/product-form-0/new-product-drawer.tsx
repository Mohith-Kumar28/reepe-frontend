import { EyeIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

import { NewProductPreview } from './new-product-preview';

export const NewProductDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="secondary"
          className="absolute right-20 top-4  lg:hidden"
        >
          <EyeIcon className="mr-2 size-4" />
          <span className="">Preview</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80vh]">
        <DrawerHeader>
          <DrawerTitle>Configuration</DrawerTitle>
          <DrawerDescription>
            Configure the settings for the model and messages.
          </DrawerDescription>
        </DrawerHeader>
        <NewProductPreview />
      </DrawerContent>
    </Drawer>
  );
};
