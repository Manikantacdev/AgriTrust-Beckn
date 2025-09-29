import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  FileText,
  Clock,
  Mail,
  Phone
} from "lucide-react";

const PrivacyPolicyPage = () => {
  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: FileText,
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly, such as your name, email address, phone number, and address when you create an account or place an order."
        },
        {
          subtitle: "Business Information",
          text: "For providers, we collect business details, certifications, product information, and verification documents to maintain marketplace quality."
        },
        {
          subtitle: "Usage Data",
          text: "We automatically collect information about your interactions with our platform, including pages visited, search queries, and transaction history."
        },
        {
          subtitle: "Device Information",
          text: "We may collect device-specific information such as IP address, browser type, and operating system to improve security and user experience."
        }
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: Users,
      content: [
        {
          subtitle: "Service Provision",
          text: "To provide, maintain, and improve our marketplace services, process transactions, and facilitate communications between buyers and sellers."
        },
        {
          subtitle: "Safety & Security",
          text: "To verify identities, prevent fraud, ensure platform security, and maintain the integrity of our decentralized network."
        },
        {
          subtitle: "Communication",
          text: "To send you service-related notifications, order updates, and important platform announcements. Marketing communications only with your consent."
        },
        {
          subtitle: "Analytics & Improvement",
          text: "To analyze usage patterns, improve our services, develop new features, and enhance the overall user experience."
        }
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      icon: Eye,
      content: [
        {
          subtitle: "Within the Network",
          text: "Necessary information is shared with other network participants (buyers/sellers) to facilitate transactions, as enabled by the Beckn protocol."
        },
        {
          subtitle: "Service Providers",
          text: "We may share information with trusted third-party service providers who assist in platform operations, payment processing, and logistics."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information when required by law, to protect our rights, prevent fraud, or ensure user safety and security."
        },
        {
          subtitle: "Business Transfers",
          text: "In case of merger, acquisition, or sale of assets, user information may be transferred as part of the business transaction."
        }
      ]
    },
    {
      id: "data-security",
      title: "Data Security & Protection",
      icon: Lock,
      content: [
        {
          subtitle: "Beckn Protocol Security",
          text: "Our platform leverages the Beckn protocol's built-in security features, including end-to-end encryption and decentralized data handling."
        },
        {
          subtitle: "Technical Safeguards",
          text: "We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits."
        },
        {
          subtitle: "Access Controls",
          text: "Access to personal data is restricted to authorized personnel only, with strict access controls and monitoring in place."
        },
        {
          subtitle: "Data Minimization",
          text: "We collect and retain only the information necessary for platform operations and delete data when no longer needed."
        }
      ]
    },
    {
      id: "user-rights",
      title: "Your Rights & Choices",
      icon: Shield,
      content: [
        {
          subtitle: "Access & Portability",
          text: "You can access, download, and port your personal data. Contact us to request a copy of your information."
        },
        {
          subtitle: "Correction & Updates",
          text: "You can update your profile information, business details, and preferences through your account settings."
        },
        {
          subtitle: "Deletion Rights",
          text: "You can request deletion of your account and personal data, subject to legal and business requirements."
        },
        {
          subtitle: "Communication Preferences",
          text: "You can opt out of marketing communications while continuing to receive essential service notifications."
        }
      ]
    }
  ];

  const quickFacts = [
    {
      icon: Shield,
      title: "Beckn Protocol",
      description: "Built on decentralized protocol ensuring data privacy by design"
    },
    {
      icon: Lock,
      title: "Encrypted Data",
      description: "All sensitive information is encrypted and securely stored"
    },
    {
      icon: Users,
      title: "No Data Sale",
      description: "We never sell your personal information to third parties"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear policies on how your data is collected and used"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Effective Date: March 15, 2024
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how AgriTrust collects, 
            uses, and protects your information in our decentralized agricultural marketplace.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Privacy at a Glance</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFacts.map((fact, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-fresh flex items-center justify-center">
                    <fact.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{fact.title}</h3>
                  <p className="text-sm text-muted-foreground">{fact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Privacy Policy Sections */}
        <section className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} id={section.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-8 h-8 rounded-lg bg-gradient-fresh flex items-center justify-center">
                      <section.icon className="h-5 w-5 text-primary" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h4 className="font-semibold text-lg mb-2">{item.subtitle}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Sections */}
        <section className="max-w-4xl mx-auto mt-12 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="w-8 h-8 rounded-lg bg-gradient-fresh flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                Data Retention
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information only as long as necessary to provide our services 
                and comply with legal obligations. Account information is retained while your account 
                is active. Transaction data is kept for 7 years for financial and legal compliance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When you delete your account, we will remove your personal information within 30 days, 
                except where retention is required by law or for legitimate business purposes such as 
                fraud prevention.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="w-8 h-8 rounded-lg bg-gradient-fresh flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                International Data Transfers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                As a decentralized platform built on the Beckn protocol, data may be processed 
                across different jurisdictions within the network. We ensure appropriate safeguards 
                are in place for any cross-border data transfers, including contractual protections 
                and compliance with applicable data protection laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="w-8 h-8 rounded-lg bg-gradient-fresh flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                Policy Updates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time to reflect changes in our 
                practices or applicable laws. We will notify you of any material changes by 
                email and by posting the updated policy on our platform. Your continued use 
                of our services after such notification constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="max-w-4xl mx-auto mt-12">
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Questions About This Policy?</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-muted-foreground">
                If you have questions about this privacy policy or our data practices, 
                please contact us:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>privacy@agritrust.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 1800-123-4567</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Data Protection Officer: Dr. Priya Sharma<br />
                AgriTrust Technologies Pvt. Ltd.<br />
                Cyber City, Gurgaon, Haryana 122002, India
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;