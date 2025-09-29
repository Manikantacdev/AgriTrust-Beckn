import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Search,
  Phone,
  Mail,
  MessageSquare,
  HelpCircle,
  Book,
  Video,
  ChevronDown,
  ChevronRight,
  Clock,
  User,
  ShoppingCart,
  Truck
} from "lucide-react";

const HelpSupportPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const supportOptions = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 Available",
      action: "Start Chat"
    },
    {
      icon: Phone,
      title: "Call Support",
      description: "Speak directly with our experts",
      availability: "Mon-Sat, 9 AM - 6 PM",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your queries via email",
      availability: "Response within 24 hours",
      action: "Send Email"
    }
  ];

  const categories = [
    {
      icon: ShoppingCart,
      title: "Orders & Payments",
      description: "Help with placing orders, payments, and billing"
    },
    {
      icon: Truck,
      title: "Shipping & Delivery",
      description: "Track orders, delivery issues, and shipping policies"
    },
    {
      icon: User,
      title: "Account & Profile",
      description: "Account setup, profile management, and verification"
    },
    {
      icon: HelpCircle,
      title: "General Questions",
      description: "Platform features, Beckn protocol, and general inquiries"
    }
  ];

  const faqs = [
    {
      category: "General",
      question: "What is AgriTrust and how does it work?",
      answer: "AgriTrust is a decentralized agricultural marketplace built on the Beckn protocol. It connects farmers directly with buyers, eliminating middlemen and ensuring fair prices. The platform enables transparent, secure transactions while maintaining data privacy."
    },
    {
      category: "Orders",
      question: "How do I place an order?",
      answer: "To place an order, browse our marketplace, select products, add them to your cart, and proceed to checkout. You'll need to provide delivery details and choose a payment method. Orders are confirmed once payment is processed."
    },
    {
      category: "Payments",
      question: "What payment methods are accepted?",
      answer: "We accept UPI payments (PhonePe, GPay, Paytm), credit/debit cards, and cash on delivery for eligible orders. All payments are processed securely through the Beckn protocol."
    },
    {
      category: "Delivery",
      question: "How long does delivery take?",
      answer: "Delivery times vary by location and product type. Fresh produce typically takes 2-3 days, while services can be scheduled based on availability. You'll receive tracking information once your order is dispatched."
    },
    {
      category: "Providers",
      question: "How can I become a provider on AgriTrust?",
      answer: "To become a provider, visit our Provider Onboarding page, choose your provider type (farmer, service provider, or input supplier), complete the registration process, and submit required documents for verification."
    },
    {
      category: "Quality",
      question: "How do you ensure product quality?",
      answer: "All providers are verified and must maintain quality standards. We have a rating system, customer reviews, and quality assurance processes. Issues are addressed through our dispute resolution system."
    }
  ];

  const resources = [
    {
      icon: Book,
      title: "User Guide",
      description: "Complete guide to using AgriTrust platform",
      link: "#"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for common tasks",
      link: "#"
    },
    {
      icon: HelpCircle,
      title: "Beckn Protocol Guide",
      description: "Learn about the technology behind our platform",
      link: "#"
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Find answers to your questions or get in touch with our support team
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
              <Input
                placeholder="Search for help topics, orders, or questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-4 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Support Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Get Support</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-fresh flex items-center justify-center">
                    <option.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4" />
                    <span>{option.availability}</span>
                  </div>
                  <Button className="bg-gradient-hero hover:opacity-90">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Help Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Browse Help Topics</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-medium transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-fresh flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{faq.category}</Badge>
                        <CardTitle className="text-lg">{faq.question}</CardTitle>
                      </div>
                      {expandedFaq === index ? (
                        <ChevronDown className="h-5 w-5" />
                      ) : (
                        <ChevronRight className="h-5 w-5" />
                      )}
                    </div>
                  </CardHeader>
                  {expandedFaq === index && (
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
            
            {filteredFaqs.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No results found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or browse our help categories above
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Helpful Resources</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-fresh flex items-center justify-center">
                    <resource.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <Button variant="outline">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Still need help?</CardTitle>
                <p className="text-center text-muted-foreground">
                  Send us a message and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Brief description of your issue" />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Describe your issue in detail..." 
                    rows={5} 
                  />
                </div>
                
                <Button className="w-full bg-gradient-hero hover:opacity-90" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpSupportPage;