import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Reports</h2>
          <p className="text-slate-500 dark:text-slate-400">Detailed analytics and test reports.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Test Coverage Trend</CardTitle>
            <CardDescription>Code coverage over the last 30 days.</CardDescription>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center border border-dashed rounded-lg m-4 dark:border-slate-800">
            <span className="text-slate-400 text-sm">Chart Placeholder</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Failure Analysis</CardTitle>
            <CardDescription>Most frequent test failures.</CardDescription>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center border border-dashed rounded-lg m-4 dark:border-slate-800">
            <span className="text-slate-400 text-sm">Chart Placeholder</span>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Generated Reports</CardTitle>
          <CardDescription>Downloadable PDF and CSV test reports.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-center">
             <FileText className="w-12 h-12 text-slate-300 dark:text-slate-700 mb-4" />
             <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No reports available</h3>
             <p className="text-slate-500 max-w-sm">Reports will be generated automatically after test executions.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
