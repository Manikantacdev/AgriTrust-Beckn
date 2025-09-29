import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Network,
  Shield,
  Users,
  Zap,
  Globe,
  Lock,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Leaf
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutNetworkPage = () => {
  const features = [
    {
      icon: Shield,
      title: "Decentralized Trust",
      description: "Built on Beckn protocol ensuring transparent, secure transactions without intermediaries"
    },
    {
      icon: Globe,
      title: "Interoperability",
      description: "Seamlessly connect with other platforms and services in the Beckn ecosystem"
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description: "Your data remains secure and private with end-to-end encryption"
    },
    {
      icon: Zap,
      title: "Fast Transactions",
      description: "Lightning-fast processing with reduced costs and improved efficiency"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Governed by the community of farmers, buyers, and service providers"
    },
    {
      icon: TrendingUp,
      title: "Scalable Network",
      description: "Built to scale from local markets to global agricultural networks"
    }
  ];

  const benefits = [
    "Direct farmer-to-buyer connections",
    "Reduced transaction costs",
    "Transparent pricing mechanisms",
    "Quality assurance and traceability",
    "Fair trade practices",
    "Sustainable agriculture promotion"
  ];

  const stats = [
    { label: "Active Farmers", value: "50,000+" },
    { label: "Service Providers", value: "10,000+" },
    { label: "Daily Transactions", value: "25,000+" },
    { label: "States Covered", value: "28" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Powered by Beckn Protocol
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future of
            <span className="block text-accent-foreground">Agricultural Commerce</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            AgriTrust leverages the Beckn protocol to create a decentralized, transparent, and efficient 
            marketplace that directly connects farmers with buyers, eliminating middlemen and ensuring fair prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/provider-onboarding">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Join the Network
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/search">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Marketplace
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What is Beckn Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What is the Beckn Protocol?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Beckn is an open protocol that enables the creation of decentralized networks 
                  for digital commerce. It allows any application to discover, order, and fulfill 
                  services from any provider in the network.
                </p>
                <p>
                  Unlike traditional platforms, Beckn doesn't own the marketplace—it enables 
                  interoperable marketplaces where participants retain control over their data 
                  and business relationships.
                </p>
                <p>
                  For agriculture, this means farmers can directly connect with buyers, service 
                  providers can offer specialized services, and the entire ecosystem can operate 
                  transparently and efficiently.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="hover:shadow-medium transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-fresh flex items-center justify-center">
                    <Network className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Decentralized Network</h3>
                  <p className="text-muted-foreground">
                    No single entity controls the network. Every participant has equal access 
                    and opportunity to succeed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose AgriTrust Network?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the benefits of a truly decentralized agricultural marketplace
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-fresh flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Network Impact
            </h2>
            <p className="text-muted-foreground">
              See how our decentralized network is transforming agriculture
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Benefits for the Agricultural Community
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-fresh flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-primary" />
                    For Farmers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Direct access to buyers, better prices, reduced intermediation costs, 
                    and transparent transactions with instant payments.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    For Buyers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fresh products directly from farms, transparent pricing, quality assurance, 
                    and traceable supply chain.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Be Part of the Revolution?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers and service providers who are already transforming 
            agriculture through decentralized commerce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/provider-onboarding">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Become a Provider
              </Button>
            </Link>
            <Link to="/search">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Start Buying
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutNetworkPage;