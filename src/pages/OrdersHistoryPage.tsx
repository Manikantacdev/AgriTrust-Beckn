import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search,
  Calendar,
  Package,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Download
} from "lucide-react";
import { Link } from "react-router-dom";

const OrdersHistoryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const orders = [
    {
      id: "AGT-2024-001234",
      date: "March 15, 2024",
      status: "In Transit",
      total: "₹750",
      items: 2,
      provider: "Green Valley Farms",
      expectedDelivery: "March 18, 2024"
    },
    {
      id: "AGT-2024-001221",
      date: "March 12, 2024",
      status: "Delivered",
      total: "₹1,200",
      items: 3,
      provider: "AgriMech Solutions",
      deliveredOn: "March 14, 2024"
    },
    {
      id: "AGT-2024-001198",
      date: "March 8, 2024",
      status: "Delivered",
      total: "₹450",
      items: 1,
      provider: "Organic Farms Co.",
      deliveredOn: "March 10, 2024"
    },
    {
      id: "AGT-2024-001156",
      date: "March 5, 2024",
      status: "Cancelled",
      total: "₹320",
      items: 2,
      provider: "Farm Fresh Ltd.",
      cancelledOn: "March 6, 2024"
    },
    {
      id: "AGT-2024-001143",
      date: "March 2, 2024",
      status: "Delivered",
      total: "₹890",
      items: 4,
      provider: "Seed Corp",
      deliveredOn: "March 4, 2024"
    }
  ];

  const statusFilters = ["All", "In Transit", "Delivered", "Cancelled"];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle className="h-4 w-4" />;
      case "In Transit":
        return <Clock className="h-4 w-4" />;
      case "Cancelled":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "In Transit":
        return "bg-blue-100 text-blue-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.provider.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Order History</h1>
        <p className="text-muted-foreground">
          View and manage all your past orders
        </p>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by order ID or provider..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {statusFilters.map((status) => (
                <Badge
                  key={status}
                  variant={statusFilter === status ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setStatusFilter(status)}
                >
                  {status}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No orders found</h3>
              <p className="text-muted-foreground">
                {searchQuery || statusFilter !== "All" 
                  ? "Try adjusting your search or filters"
                  : "You haven't placed any orders yet"
                }
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredOrders.map((order) => (
            <Card key={order.id} className="hover:shadow-medium transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg">{order.id}</h3>
                      <Badge className={getStatusColor(order.status)}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(order.status)}
                          {order.status}
                        </div>
                      </Badge>
                    </div>
                    
                    <div className="grid sm:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Order Date</p>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{order.date}</span>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-muted-foreground">Provider</p>
                        <p className="font-medium">{order.provider}</p>
                      </div>
                      
                      <div>
                        <p className="text-muted-foreground">Items & Total</p>
                        <p className="font-medium">
                          {order.items} items • {order.total}
                        </p>
                      </div>
                    </div>

                    {/* Status-specific info */}
                    {order.status === "In Transit" && (
                      <div className="text-sm">
                        <p className="text-muted-foreground">Expected Delivery</p>
                        <p className="font-medium text-primary">{order.expectedDelivery}</p>
                      </div>
                    )}
                    
                    {order.status === "Delivered" && (
                      <div className="text-sm">
                        <p className="text-muted-foreground">Delivered On</p>
                        <p className="font-medium text-green-600">{order.deliveredOn}</p>
                      </div>
                    )}
                    
                    {order.status === "Cancelled" && (
                      <div className="text-sm">
                        <p className="text-muted-foreground">Cancelled On</p>
                        <p className="font-medium text-red-600">{order.cancelledOn}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <Link to={`/order-status/${order.id}`}>
                      <Button variant="outline" className="w-full">
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </Link>
                    
                    {order.status === "Delivered" && (
                      <>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Invoice
                        </Button>
                        <Button size="sm" className="bg-gradient-hero hover:opacity-90">
                          Rate & Review
                        </Button>
                      </>
                    )}
                    
                    {order.status === "In Transit" && (
                      <Button variant="outline" size="sm">
                        Track Order
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Pagination */}
      {filteredOrders.length > 0 && (
        <div className="flex justify-center mt-8">
          <Button variant="outline">
            Load More Orders
          </Button>
        </div>
      )}
    </div>
  );
};

export default OrdersHistoryPage;