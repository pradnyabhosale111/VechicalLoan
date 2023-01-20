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
<<<<<<< HEAD
                { key: "vieweApplication", label: "View Enquiery Details" },
                //   {key:"showApplication", label:"Check applicaton" }          

            ],
            Cmanager: [
                { path: "showVerifiedList", label: "Show Application" },
            ]
            // Accmanager: [
            //     { path: "showVerifiedList", label: "Show Application" },
            // ]
=======
                { key: "vieweApplication", label: "View Enquiery Details" },                

            ],
            Cmanager: [
                { key: "showVerifiedList", label: "Show Application" },
            ],
            acManager: [
                {    key:'showSanctionist', label: "Show Sanction List"},
                {    key:'showLedgerData',  label: "Show LedgerList"}               
            ]
        //    admin:[

        //    ]
>>>>>>> 0f7ec5f354cf6ad508dbc511f8210684feffa0c8
           

            
        }
    ]
}
