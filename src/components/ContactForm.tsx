import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Buyer form schema
const buyerFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(1, { message: "Company name is required." }),
  commodityType: z.string().min(1, { message: "Commodity type is required." }),
  quantity: z.string().min(1, { message: "Quantity is required." }),
  specifications: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

// Seller form schema
const sellerFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(1, { message: "Company name is required." }),
  commodityDetails: z.string().min(1, { message: "Commodity details are required." }),
  origin: z.string().min(1, { message: "Origin is required." }),
  availability: z.string().min(1, { message: "Availability information is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactForm = () => {
  const [activeTab, setActiveTab] = useState("buyer");
  const { toast } = useToast();

  // Buyer form
  const buyerForm = useForm<z.infer<typeof buyerFormSchema>>({
    resolver: zodResolver(buyerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      commodityType: "",
      quantity: "",
      specifications: "",
      message: "",
    },
  });

  // Seller form
  const sellerForm = useForm<z.infer<typeof sellerFormSchema>>({
    resolver: zodResolver(sellerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      commodityDetails: "",
      origin: "",
      availability: "",
      message: "",
    },
  });

  // Buyer form submit handler
  function onBuyerSubmit(values: z.infer<typeof buyerFormSchema>) {
    console.log(values);
    toast({
      title: "Inquiry Submitted",
      description: "We'll get back to you as soon as possible.",
    });
    buyerForm.reset();
  }

  // Seller form submit handler
  function onSellerSubmit(values: z.infer<typeof sellerFormSchema>) {
    console.log(values);
    toast({
      title: "Listing Submitted",
      description: "We'll get back to you as soon as possible.",
    });
    sellerForm.reset();
  }

  return (
    <div className="bg-gray-50 py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're looking to purchase commodities or list your products for sale,
            our team is ready to assist you
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 w-full mb-8">
              <TabsTrigger value="buyer" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3">
                I'm a Buyer
              </TabsTrigger>
              <TabsTrigger value="seller" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3">
                I'm a Seller
              </TabsTrigger>
            </TabsList>

            <TabsContent value="buyer" className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Inquire About Trading</h3>
              <Form {...buyerForm}>
                <form onSubmit={buyerForm.handleSubmit(onBuyerSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={buyerForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={buyerForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={buyerForm.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={buyerForm.control}
                      name="commodityType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Commodity Type</FormLabel>
                          <FormControl>
                            <Input placeholder="E.g., Iron Ore, Rice, Copper" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={buyerForm.control}
                      name="quantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quantity</FormLabel>
                          <FormControl>
                            <Input placeholder="E.g., 10,000 MT" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={buyerForm.control}
                    name="specifications"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Specifications</FormLabel>
                        <FormControl>
                          <Input placeholder="Any specific requirements" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={buyerForm.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Information</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please share any additional details about your inquiry" 
                            className="h-32" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Submit Inquiry
                  </Button>
                </form>
              </Form>
            </TabsContent>

            <TabsContent value="seller" className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">List Your Commodities</h3>
              <Form {...sellerForm}>
                <form onSubmit={sellerForm.handleSubmit(onSellerSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={sellerForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={sellerForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={sellerForm.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={sellerForm.control}
                    name="commodityDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Commodity Details</FormLabel>
                        <FormControl>
                          <Input placeholder="Type, quality, grade, etc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={sellerForm.control}
                      name="origin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Origin</FormLabel>
                          <FormControl>
                            <Input placeholder="Country/region of origin" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={sellerForm.control}
                      name="availability"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Availability</FormLabel>
                          <FormControl>
                            <Input placeholder="Quantity and timing" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={sellerForm.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Information</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please share any additional details about your commodity" 
                            className="h-32" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Submit Listing
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium">Email</p>
                <p className="text-blue-600">info@argosianresources.com</p>
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-blue-600">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
