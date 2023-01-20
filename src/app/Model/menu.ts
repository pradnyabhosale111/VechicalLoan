export class Menu {


    public static menus: Array<any> = [
        {
            User: [
                { key: "applicationform", label: "Application form" },
                { key: "statusshowform", label: "Check My Application" }
            ],
            RExecutive: [
                { key: "viewenquiries", label: "View Enquiery Details" }
            ],
            OExecutive: [
                { key: "vieweApplication", label: "View Enquiery Details" },
                //   {key:"showApplication", label:"Check applicaton" }          

            ],
            Cmanager: [
                { path: "showVerifiedList", label: "Show Application" },
            ]
            // Accmanager: [
            //     { path: "showVerifiedList", label: "Show Application" },
            // ]
           

            
        }
    ]
}
