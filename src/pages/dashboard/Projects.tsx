import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderKanban, Plus } from "lucide-react";

export default function Projects() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Projects</h2>
          <p className="text-slate-500 dark:text-slate-400">Manage your testing projects and environments.</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center p-12 border border-dashed rounded-lg bg-transparent dark:border-slate-800 text-center">
        <FolderKanban className="w-12 h-12 text-slate-300 dark:text-slate-700 mb-4" />
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No projects yet</h3>
        <p className="text-slate-500 max-w-sm mb-6">Create your first project to start running automated test suites.</p>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Project
        </Button>
      </div>
    </div>
  );
}
