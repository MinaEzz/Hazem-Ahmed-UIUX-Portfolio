type Tcategory = "web_app" | "mobile_app" | "control_panel" | "pacs_system";

export default interface IProject {
  id: string | number;
  title: string;
  image: string;
  createdAt: string;
  category: Tcategory;
}
