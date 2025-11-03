"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Heart, BookOpen, Leaf, Home, ChefHat, Star } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "product" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Nonna's Kitchen"
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Authentic Italian Cuisine in the Heart of Rome"
          description="Experience the finest traditional Italian dishes crafted with love, using recipes passed down through generations in our family-owned restaurant."
          tag="Established 1952"
          tagIcon={Award}
          buttons={[
            {
              text: "View Menu",
              href: "product"
            },
            {
              text: "Reserve Table",
              href: "contact"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/27822830/pexels-photo-27822830.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant dining room at Nonna's Kitchen"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Story"
          description="For over 70 years, Nonna's Kitchen has been serving the finest Italian cuisine in Rome, preserving authentic flavors and family traditions."
          tag="Famiglia Italiana"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Family Recipes",
              description: "Traditional recipes handed down through four generations",
              icon: BookOpen
            },
            {
              title: "Fresh Ingredients",
              description: "Daily sourced from local Italian markets and farms",
              icon: Leaf
            },
            {
              title: "Authentic Atmosphere",
              description: "Warm, welcoming environment that feels like home",
              icon: Home
            }
          ]}
          imageSrc="https://images.pexels.com/photos/3771814/pexels-photo-3771814.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Chef preparing traditional Italian pasta"
          imagePosition="left"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Our Signature Dishes"
          description="Discover our most beloved creations, each prepared with passion and the finest ingredients"
          tag="Menu Highlights"
          tagIcon={ChefHat}
          products={[
            {
              id: "1",
              name: "Spaghetti Carbonara",
              price: "€18",
              imageSrc: "https://images.pexels.com/photos/3696/food-dinner-lunch-meal.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fresh spaghetti carbonara with pancetta"
            },
            {
              id: "2",
              name: "Pizza Margherita",
              price: "€16",
              imageSrc: "https://images.pexels.com/photos/34380267/pexels-photo-34380267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Wood-fired pizza margherita"
            },
            {
              id: "3",
              name: "Risotto ai Porcini",
              price: "€22",
              imageSrc: "https://images.pexels.com/photos/14537701/pexels-photo-14537701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Creamy mushroom risotto with porcini"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Read what our valued customers have to say about their dining experience"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Maria Rossi",
              role: "Food Blogger",
              company: "Roma Eats",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/9826293/pexels-photo-9826293.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Maria Rossi"
            },
            {
              id: "2",
              name: "James Mitchell",
              role: "Travel Writer",
              company: "European Cuisine",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/10269676/pexels-photo-10269676.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Mitchell"
            },
            {
              id: "3",
              name: "Isabella Romano",
              role: "Chef",
              company: "Culinary Institute",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3775172/pexels-photo-3775172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Isabella Romano"
            },
            {
              id: "4",
              name: "Antonio Bianchi",
              role: "Restaurant Owner",
              company: "Bianchi Group",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4046765/pexels-photo-4046765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Antonio Bianchi"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Table"
          description="Join us for an unforgettable dining experience. Contact us to make a reservation or for any inquiries."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "date",
              type: "date",
              placeholder: "Preferred Date",
              required: true
            },
            {
              name: "guests",
              type: "number",
              placeholder: "Number of Guests",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or dietary requirements...",
            rows: 4,
            required: false
          }}
          buttonText="Reserve Table"
          imageSrc="https://images.pexels.com/photos/7946974/pexels-photo-7946974.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Nonna's Kitchen restaurant exterior in Rome"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Nonna's Kitchen"
          columns={[
            {
              items: [
                {
                  label: "Menu",
                  href: "product"
                },
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Reviews",
                  href: "testimonial"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Via Roma 123, Rome",
                  href: "#"
                },
                {
                  label: "+39 06 1234 5678",
                  href: "tel:+390612345678"
                },
                {
                  label: "info@nonnaskitchen.it",
                  href: "mailto:info@nonnaskitchen.it"
                },
                {
                  label: "Open Daily 12-23",
                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}