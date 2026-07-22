import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Settings() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Settings</h2>
        <p className="text-slate-500 dark:text-slate-400">Manage your workspace preferences.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Workspace Profile</CardTitle>
          <CardDescription>Update your workspace details and branding.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="workspace-name">Workspace Name</Label>
            <Input id="workspace-name" defaultValue="Acme Corp Testing" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="workspace-url">Workspace URL</Label>
            <Input id="workspace-url" defaultValue="acme.ata-workspace.dev" readOnly className="bg-slate-50 dark:bg-slate-900 text-slate-500" />
          </div>
        </CardContent>
        <CardFooter className="border-t border-slate-100 dark:border-slate-800 pt-4">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Danger Zone</CardTitle>
          <CardDescription>Destructive actions for your workspace.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-500 mb-4">Once you delete a workspace, there is no going back. Please be certain.</p>
          <Button variant="destructive">Delete Workspace</Button>
        </CardContent>
      </Card>
    </div>
  );
}
