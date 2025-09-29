import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Clock, 
  Truck, 
  Package, 
  MapPin,
  Phone,
  Calendar
} from "lucide-react";

const OrderStatusPage = () => {
  const { id } = useParams();

  // Mock order data
  const order = {
    id: "AGT-2024-001234",
    status: "In Transit",
    placedDate: "March 15, 2024",
    expectedDelivery: "March 18, 2024",
    total: "₹750",
    items: [
      {
        id: "1",
        title: "Organic Tomatoes",
        quantity: 5,
        unit: "kg",
        price: 400,
        provider: "Green Valley Farms"
      },
      {
        id: "2",
        title: "Premium Rice Seeds", 
        quantity: 2,
        unit: "kg",
        price: 300,
        provider: "Seed Corp"
      }
    ],
    deliveryAddress: {
      name: "Rajesh Kumar",
      address: "123 Main Street, Sector 15",
      city: "Gurgaon, Haryana",
      pincode: "122001",
      phone: "+91 98765 43210"
    },
    tracking: [
      {
        status: "Order Placed",
        description: "Your order has been placed successfully",
        timestamp: "March 15, 2024 - 10:30 AM",
        completed: true
      },
      {
        status: "Order Confirmed",
        description: "Order confirmed by provider and processing started",
        timestamp: "March 15, 2024 - 11:15 AM",
        completed: true
      },
      {
        status: "Packed & Ready",
        description: "Items packed and ready for dispatch",
        timestamp: "March 16, 2024 - 09:00 AM",
        completed: true
      },
      {
        status: "In Transit",
        description: "Order is on the way to your location",
        timestamp: "March 17, 2024 - 02:30 PM",
        completed: true,
        current: true
      },
      {
        status: "Out for Delivery",
        description: "Order is out for delivery",
        timestamp: "Expected: March 18, 2024",
        completed: false
      },
      {
        status: "Delivered",
        description: "Order delivered successfully",
        timestamp: "Expected: March 18, 2024",
        completed: false
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Order Status</h1>
        <p className="text-muted-foreground">Track your order: {order.id}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Order Tracking */}
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Order Timeline</CardTitle>
                <Badge 
                  className={
                    order.status === "Delivered" 
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }
                >
                  {order.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {order.tracking.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.completed 
                            ? step.current
                              ? "bg-gradient-hero text-white"
                              : "bg-green-100 text-green-600"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {step.completed ? (
                          step.current ? (
                            <Truck className="h-5 w-5" />
                          ) : (
                            <CheckCircle className="h-5 w-5" />
                          )
                        ) : (
                          <Clock className="h-5 w-5" />
                        )}
                      </div>
                      {index < order.tracking.length - 1 && (
                        <div 
                          className={`w-0.5 h-12 mt-2 ${
                            step.completed ? "bg-primary" : "bg-muted"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <h3 
                        className={`font-semibold ${
                          step.current ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {step.status}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {step.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {step.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Order Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-3 border border-border rounded-lg">
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.provider} • {item.quantity} {item.unit}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{item.price}</p>
                    </div>
                  </div>
                ))}
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total Amount</span>
                    <span>{order.total}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary & Actions */}
        <div className="space-y-6">
          {/* Delivery Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Delivery Address
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold">{order.deliveryAddress.name}</p>
                <p className="text-sm text-muted-foreground">
                  {order.deliveryAddress.address}
                </p>
                <p className="text-sm text-muted-foreground">
                  {order.deliveryAddress.city} - {order.deliveryAddress.pincode}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{order.deliveryAddress.phone}</span>
              </div>
            </CardContent>
          </Card>

          {/* Order Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Order Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Order ID</span>
                <span className="font-mono">{order.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Placed on</span>
                <span>{order.placedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Expected Delivery</span>
                <span className="font-semibold text-primary">{order.expectedDelivery}</span>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  Contact Provider
                </Button>
                <Button variant="outline" className="w-full">
                  Download Invoice
                </Button>
                {order.status === "Delivered" && (
                  <Button className="w-full bg-gradient-hero hover:opacity-90">
                    Rate & Review
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusPage;