import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Find Your Dream Home</h1>
          <p className="mt-4 text-xl">We help you find the best properties in the city</p>
          <form onSubmit={handleSearchSubmit} className="mt-8 flex justify-center">
            <Input
              type="text"
              placeholder="Search for properties..."
              value={search}
              onChange={handleSearchChange}
              className="w-1/2 p-4"
            />
            <Button type="submit" className="ml-2">Search</Button>
          </form>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Example Property Card */}
          <Card>
            <CardHeader>
              <img src="/images/property1.jpg" alt="Property 1" className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent>
              <CardTitle>Beautiful Family House</CardTitle>
              <p>3 beds • 2 baths • 1,800 sqft</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Details</Button>
            </CardFooter>
          </Card>
          {/* Add more property cards as needed */}
        </div>
      </section>

      {/* About Us */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <div className="flex flex-col md:flex-row items-center mt-8">
          <div className="md:w-1/2">
            <p>
              We are a leading real estate company with over 20 years of experience in helping people find their dream homes. Our team of dedicated professionals is here to assist you every step of the way.
            </p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img src="/images/about-us.jpg" alt="About Us" className="w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* Our Agents */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Our Agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Example Agent Card */}
          <Card>
            <CardHeader>
              <img src="/images/agent1.jpg" alt="Agent 1" className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent>
              <CardTitle>John Doe</CardTitle>
              <p>Phone: (123) 456-7890</p>
              <p>Email: john.doe@example.com</p>
            </CardContent>
          </Card>
          {/* Add more agent cards as needed */}
        </div>
      </section>

      {/* Contact Us */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form className="mt-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
          </div>
          <Input type="text" placeholder="Phone Number" />
          <textarea placeholder="Message" className="w-full p-4 border rounded-md"></textarea>
          <Button type="submit">Send Message</Button>
        </form>
        <div className="mt-8 text-center">
          <p>Address: 123 Main St, Anytown, USA</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
      </section>
    </div>
  );
};

export default Index;