export const GENERAL_INSURANCE= {
 component1:{   
        image :require("../assets/images/engineering.webp"),
        title :"Engineering", 
        description:"Et enim ad minim veniam, quis nostrud exercitation ullamco l...",
    },
    component2:{   
        image :require("../assets/images/property-all-risk.webp"),
        title :"Property All-Risk", 
    },
   component3:{   
        image :require("../assets/images/marine-hull.webp"),
        title :"All Marine", 
    },
   component4:{   
        image :require("../assets/images/motor-vehicle.webp"),
        title :"Motor Vehicle", 
    },
   component5:{   
        image :require("../assets/images/liability-insurance.webp"),
        title :"Liability", 
    },
   component6:{   
        image :require("../assets/images/surety-bond.webp"),
        title :"Surety Bond", 
    },
}
    
export const SURETY_BOND = [
    {
        title: "Surety Bond"
    },
    {
     atribute:'Bid Bond',
     description:'Guarantee the Obligee if the Principal resigns (reneges on his promise) or does not continue to sign the contract.'
    },
    {
     atribute:'Advance Payment Bond',
     description:'Guarantee the Obligee that the Principal will be able to return the down payment that has been received in accordance with the terms agreed in the contract..'
    },
    {
     atribute:'Performance Bond',
     description:'Guarantee the ability of the Principal to carry out Guarantee the Obligee / Employer if the Principal / Employee fails to carry out his job or the physical work is not in accordance with the provisions of the contract.'
    },
    {
     atribute:'Maintenance Bond',
     description:'Maintenance Guarantee for the results of work that has been completed as a substitute for the amount retained by the Obligee or the employer.'
    },
    {
     atribute:'Customs Bond',
     description: "The guarantee for a risk provided by the “Guarantor” (Surety) to the Domestic Ethyl Alcohol-Containing Beverage Industry Company is not categorized as liquor (Principal) to carry out its obligations in accordance with the periodic excise payment deferral facility it's obtains from the government, in this case the Directorate General of Customs. & Excise. If the Principal does not carry out its obligation, namely paying periodic Excise, the Obligee will redeem the guarantee provided by Surety."
    },
    {
     atribute:'Bank Guarantee',
     description:'Collateral for the Bank Guarantee issued by the Bank for the benefit of the “Employee” (Principal) in fulfilling its obligations in accordance with the provisions contained in the principal “Employer” (Obligee) agreement with the Principal, and if the Principal does not fulfill his obligations in accordance with the provisions of the contract, then the Insurance (Surety) will pay to the Bank for the Bank Guarantee claim submitted by the Obligee / Job Owner.'
    },
    ];

    export const PROPERTY_ALL_RISK = [
        {
            title: "Property All Risk",
            desk: "Provides protection to your property against all damage from any fortuitous cause such as fire, lightning strike, explosion, plane crash, smoke (FLEXAS), hurricane, storm, flood, landslides, earthquakes, strikes, riots, riots, evil actions of others and other risks."
        },
        {
            attribute: "Benefits",
            description: [
                "Provide compensation for damage, loss, and destruction to property (material damage).",
                "Provide compensation for losses or lost profits in connection with the cessation of company operations (business interruption) caused by the loss of property.",
                "Providing extended coverage with an additional premium to be able to get additional benefits such as third-party claim fees, debris cleaning fees, and fire fighting fees."
            ]
        }
    ];

    export const MOTOR_VEHICLE = [
        {
         title : "Motor Vehicle",
         description : "Provides protection for all types of motorized vehiches, such as trucks, four-wheeled vehicles (cars) & two-wheeled vehicles (motorbikes) againts any loss or damage caused by:",
        },
        {
         atribute :'Accident'
        },
        {
         atribute :'External acts of crime'
        },
        {
         atribute :'Theft, fire and damage that occurred while on the ferry'
        },
        {
         atribute :'Riot'
        },
        {
         atribute :' Act of God (Natural Disaster, Eruption)'
        },
        {
         atribute :'Floods, earthquakes, strong winds, rainstorms'
        },
]


export const LIABILITY = [
    {
      title: "Liability Insurance",
      description: "Liability insurance is an insurance product that provides an insured party with protection against claims resulting from injuries and damage to other people or property. Liability insurance policies cover any legal costs and payouts an insured party is responsible for if they are found legally liable."
    },
    {
      attribute: 'General',
      items: [
        {
          titleAttribute: 'Public Liability',
          desk: 'Covering the risks that occur in the Insured Company. So the risk that is guaranteed isthe risk of the activities carried out in the insured company’s premises. Since Public Liability guarantees Premises risks, namely hazards in the area covered by the Insured and which result in damage or loss to the environment and people, except those suffered by workers from the Insured himself. Premises can be in the form of factories, cinemas, restaurants, shops and so on.',
        },
        {
          titleAttribute: 'Product Liability',
          desk: 'Covering the risks that occur in the Insured Company. So the risk that is guaranteed Guarantee an entrepreneur against the risk of being sued by a third party (generally consumers of their products) due to bodily injury or property damage due to the use of their products that',
        },
        {
          titleAttribute: 'Employer’s Liability',
          desk: 'if an employee is injured while carrying out his duties, the employer must be responsible for this injury, then the employee must be able to prove that the accident was caused by the negligence of the employer in providing facilities for the safety of his employees.'
        },
      ]
    },
    {
      attribute: 'Professional',
      desk: 'Providing indemnity to the insured in connection with his legal responsibilities to other persons or related parties with bodily injury or loss of damage to property arising from the negligence of the insured’s profession or due to the negligence of his employees. The process of the occurrence of a professional liability claim can take a long time and is divided into three stages: Failure to carry out the profession, Materialization of losses, Claim for compensation. The process from one stage to another can take a long time. The consequences that arise from a doctor’s mistake in carrying out an operation, for example, can only be seen in a few months, even several years later.'
    },
    {
      attribute: 'Personal',
      desk: 'Providing indemnity to the insured against claims resulting from injuries and damage to other people or property as the result of the insured negligence.'
    }
  ];
  