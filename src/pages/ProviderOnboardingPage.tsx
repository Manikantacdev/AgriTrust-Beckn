import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Building, 
  FileText,
  CheckCircle,
  Upload,
  Leaf,
  Shield,
  TrendingUp
} from "lucide-react";

const ProviderOnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [providerType, setProviderType] = useState("");

  const steps = [
    { id: 1, title: "Provider Type", description: "Choose your provider category" },
    { id: 2, title: "Basic Information", description: "Tell us about yourself" },
    { id: 3, title: "Business Details", description: "Your business information" },
    { id: 4, title: "Verification", description: "Document verification" },
    { id: 5, title: "Review", description: "Review and submit" }
  ];

  const providerTypes = [
    {
      id: "farmer",
      title: "Farmer",
      description: "Sell fresh produce, grains, and crops directly",
      icon: Leaf,
      benefits: ["Direct sales", "Better prices", "No middlemen"]
    },
    {
      id: "service",
      title: "Service Provider",
      description: "Offer agricultural services and equipment",
      icon: Building,
      benefits: ["Wider reach", "Online bookings", "Trusted network"]
    },
    {
      id: "supplier",
      title: "Input Supplier",
      description: "Supply seeds, fertilizers, and farming inputs",
      icon: Shield,
      benefits: ["B2B sales", "Bulk orders", "Verified buyers"]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Income",
      description: "Direct sales mean better margins and higher profits"
    },
    {
      icon: Shield,
      title: "Trusted Platform",
      description: "Beckn protocol ensures secure and transparent transactions"
    },
    {
      icon: User,
      title: "Wide Network",
      description: "Access to thousands of verified buyers across India"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join AgriTrust Network
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Become a verified provider and start selling your products or services 
            to thousands of buyers across India
          </p>
          <Badge className="bg-white/20 text-white border-white/30">
            Powered by Beckn Protocol • Trusted by 60,000+ Providers
          </Badge>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                        currentStep >= step.id 
                          ? "bg-primary border-primary text-white" 
                          : "border-muted-foreground text-muted-foreground"
                      }`}
                    >
                      {currentStep > step.id ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        step.id
                      )}
                    </div>
                    <div className="text-center mt-2">
                      <p className={`text-sm font-medium ${
                        currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {step.title}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div 
                      className={`flex-1 h-0.5 mx-4 ${
                        currentStep > step.id ? "bg-primary" : "bg-muted"
                      }`} 
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Choose Your Provider Type</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  {providerTypes.map((type) => (
                    <div
                      key={type.id}
                      className={`border rounded-lg p-6 cursor-pointer transition-all hover:shadow-medium ${
                        providerType === type.id
                          ? "border-primary bg-accent/30"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setProviderType(type.id)}
                    >
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-fresh flex items-center justify-center">
                          <type.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                          <div className="space-y-1">
                            {type.benefits.map((benefit, idx) => (
                              <p key={idx} className="text-xs text-primary">✓ {benefit}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    onClick={() => setCurrentStep(2)} 
                    disabled={!providerType}
                    className="bg-gradient-hero hover:opacity-90"
                  >
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter last name" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter email address" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter phone number" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Full Address</Label>
                  <Textarea id="address" placeholder="Enter complete address" rows={3} />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="City" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="State" />
                  </div>
                  <div>
                    <Label htmlFor="pincode">PIN Code</Label>
                    <Input id="pincode" placeholder="PIN Code" />
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentStep(1)}>
                    Back
                  </Button>
                  <Button onClick={() => setCurrentStep(3)} className="bg-gradient-hero hover:opacity-90">
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Business Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="businessName">Business/Farm Name</Label>
                  <Input id="businessName" placeholder="Enter business or farm name" />
                </div>

                <div>
                  <Label htmlFor="businessType">Business Type</Label>
                  <Input id="businessType" placeholder="e.g., Organic Farm, Equipment Rental" />
                </div>

                <div>
                  <Label htmlFor="description">Business Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe your business, products, or services..." 
                    rows={4} 
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input id="experience" placeholder="Enter years" />
                  </div>
                  <div>
                    <Label htmlFor="capacity">Production/Service Capacity</Label>
                    <Input id="capacity" placeholder="e.g., 100 tons/year" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="certifications">Certifications (if any)</Label>
                  <Input id="certifications" placeholder="e.g., Organic certification, ISO" />
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentStep(2)}>
                    Back
                  </Button>
                  <Button onClick={() => setCurrentStep(4)} className="bg-gradient-hero hover:opacity-90">
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Document Verification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {[
                    "Aadhaar Card",
                    "PAN Card",
                    "Business License/Registration",
                    "Bank Account Details",
                    "Land Ownership Documents (for farmers)"
                  ].map((doc, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{doc}</h3>
                          <p className="text-sm text-muted-foreground">
                            {index >= 4 ? "Optional for non-farmers" : "Required"}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Upload className="mr-2 h-4 w-4" />
                          Upload
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Verification Process</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Documents are verified within 2-3 business days</li>
                    <li>• You'll receive email updates on verification status</li>
                    <li>• All documents are encrypted and stored securely</li>
                  </ul>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentStep(3)}>
                    Back
                  </Button>
                  <Button onClick={() => setCurrentStep(5)} className="bg-gradient-hero hover:opacity-90">
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 5 && (
            <Card>
              <CardHeader>
                <CardTitle>Review & Submit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Application Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Provider Type:</span>
                      <span className="font-medium capitalize">{providerType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Application ID:</span>
                      <span className="font-mono">AGT-APP-{Date.now()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expected Verification:</span>
                      <span>2-3 business days</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Next Steps:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      We'll verify your documents and business details
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      You'll receive email confirmation upon approval
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      Start listing your products/services immediately
                    </li>
                  </ul>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentStep(4)}>
                    Back
                  </Button>
                  <Button size="lg" className="bg-gradient-hero hover:opacity-90">
                    Submit Application
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Benefits Section */}
      {currentStep === 1 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Join AgriTrust?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-fresh flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProviderOnboardingPage;