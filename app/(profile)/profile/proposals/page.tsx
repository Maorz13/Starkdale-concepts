import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Download, Eye } from "lucide-react"

const PROPOSALS = [
  { id: "P-001", property: "West Ridge Home 205", date: "Mar 10, 2026", status: "Active", amount: "$2,100,000" },
  { id: "P-002", property: "Cascades Residence 101", date: "Feb 28, 2026", status: "Expired", amount: "$1,250,000" },
  { id: "P-003", property: "The Square Unit 312", date: "Feb 15, 2026", status: "Draft", amount: "$890,000" },
]

export default function ProposalsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Proposals</h1>
        <p className="text-muted-foreground">
          Track and manage your property purchase proposals.
        </p>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Proposal ID</TableHead>
                <TableHead>Property</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {PROPOSALS.map((proposal) => (
                <TableRow key={proposal.id}>
                  <TableCell className="font-medium">{proposal.id}</TableCell>
                  <TableCell>{proposal.property}</TableCell>
                  <TableCell>{proposal.date}</TableCell>
                  <TableCell>{proposal.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        proposal.status === "Active"
                          ? "default"
                          : proposal.status === "Draft"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {proposal.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="icon">
                        <Eye className="size-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="size-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
