'use client';

import { PlusCircle, Upload } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { CurrencyPicker } from '@/components/reusable-components/atoms/currency-picker';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export const NewProductForm = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('inr');
  return (
    <ScrollArea className="h-[80vh] w-full rounded-md  p-4 shadow-sm">
      {/* <div
        className="relative hidden  flex-col items-start gap-8 md:flex"
        x-chunk="dashboard-03-chunk-0"
      > */}
      <form className="grid  w-full items-start gap-6 ">
        <div className="flex flex-col gap-4  lg:gap-8">
          <Card x-chunk="dashboard-07-chunk-0">
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    className="w-full"
                    defaultValue="Gamer Gear Pro Controller"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                    className="min-h-32"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-07-chunk-1">
            <CardHeader>
              <CardTitle>Tier</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Name</TableHead>
                    <TableHead>Per Unit</TableHead>
                    <TableHead>Flat Fee</TableHead>
                    <TableHead className="w-[100px]">Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">GGPC-001</TableCell>
                    <TableCell>
                      <Label htmlFor="stock-1" className="sr-only">
                        Stock
                      </Label>
                      <Input id="stock-1" type="number" defaultValue="100" />
                    </TableCell>
                    <TableCell>
                      <Label htmlFor="price-1" className="sr-only">
                        Price
                      </Label>
                      <Input id="price-1" type="number" defaultValue="99.99" />
                    </TableCell>
                    <TableCell>
                      <ToggleGroup
                        type="single"
                        defaultValue="s"
                        variant="outline"
                      >
                        <ToggleGroupItem value="s">S</ToggleGroupItem>
                        <ToggleGroupItem value="m">M</ToggleGroupItem>
                        <ToggleGroupItem value="l">L</ToggleGroupItem>
                      </ToggleGroup>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">GGPC-002</TableCell>
                    <TableCell>
                      <Label htmlFor="stock-2" className="sr-only">
                        Stock
                      </Label>
                      <Input id="stock-2" type="number" defaultValue="143" />
                    </TableCell>
                    <TableCell>
                      <Label htmlFor="price-2" className="sr-only">
                        Price
                      </Label>
                      <Input id="price-2" type="number" defaultValue="99.99" />
                    </TableCell>
                    <TableCell>
                      <ToggleGroup
                        type="single"
                        defaultValue="m"
                        variant="outline"
                      >
                        <ToggleGroupItem value="s">S</ToggleGroupItem>
                        <ToggleGroupItem value="m">M</ToggleGroupItem>
                        <ToggleGroupItem value="l">L</ToggleGroupItem>
                      </ToggleGroup>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">GGPC-003</TableCell>
                    <TableCell>
                      <Label htmlFor="stock-3" className="sr-only">
                        Stock
                      </Label>
                      <Input id="stock-3" type="number" defaultValue="32" />
                    </TableCell>
                    <TableCell>
                      <Label htmlFor="price-3" className="sr-only">
                        Stock
                      </Label>
                      <Input id="price-3" type="number" defaultValue="99.99" />
                    </TableCell>
                    <TableCell>
                      <ToggleGroup
                        type="single"
                        defaultValue="s"
                        variant="outline"
                      >
                        <ToggleGroupItem value="s">S</ToggleGroupItem>
                        <ToggleGroupItem value="m">M</ToggleGroupItem>
                        <ToggleGroupItem value="l">L</ToggleGroupItem>
                      </ToggleGroup>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="justify-center border-t p-4">
              <Button size="sm" variant="ghost" className="gap-1">
                <PlusCircle className="size-3.5" />
                Add Tier
              </Button>
            </CardFooter>
          </Card>
          <Card x-chunk="dashboard-07-chunk-2">
            <CardHeader>
              <CardTitle>Billing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="product-name">Amount</Label>
                  <div className="relative flex">
                    <Input id="product-name" type="number" />
                    <div className="absolute right-0 top-0">
                      <CurrencyPicker
                        value={selectedCurrency}
                        setValue={setSelectedCurrency}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="role">Billing Period</Label>
                  <Select defaultValue="system">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="system">Monthly</SelectItem>
                      <SelectItem value="user">Quarterly</SelectItem>
                      <SelectItem value="assistant">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-07-chunk-3">
            <CardHeader>
              <CardTitle>Product Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger id="status" aria-label="Select status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Active</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
            <CardHeader>
              <CardTitle>Product Images</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Image
                  alt="Product image"
                  className="aspect-square w-full rounded-md object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="300"
                />
                <div className="grid grid-cols-3 gap-2">
                  <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="84"
                    src="/placeholder.svg"
                    width="84"
                  />

                  <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="84"
                    src="/placeholder.svg"
                    width="84"
                  />

                  <Button
                    variant="secondary"
                    className="flex aspect-square size-full items-center justify-center rounded-md border border-dashed"
                  >
                    <Upload className="size-4 text-muted-foreground" />
                    <span className="sr-only">Upload</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-07-chunk-5">
            <CardHeader>
              <CardTitle>Archive Product</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div />
              <Button size="sm" variant="secondary">
                Archive Product
              </Button>
            </CardContent>
          </Card>
        </div>

        <Button type="submit" className="sticky bottom-0 left-0">
          Save changes
        </Button>
      </form>
      {/* </div> */}
    </ScrollArea>
  );
};
