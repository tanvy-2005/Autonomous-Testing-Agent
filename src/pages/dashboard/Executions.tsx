import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";

export default function Executions() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Executions</h2>
          <p className="text-slate-500 dark:text-slate-400">View and manage active and past test runs.</p>
        </div>
        <Button>
          <Play className="w-4 h-4 mr-2" />
          Run Suite
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Executions</CardTitle>
          <CardDescription>List of automated test runs.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-center">
             <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
               <Play className="w-6 h-6 text-slate-400" />
             </div>
             <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No executions found</h3>
             <p className="text-slate-500 max-w-sm">Run your first test suite to see the execution results here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
