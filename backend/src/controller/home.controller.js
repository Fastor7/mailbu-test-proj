
const newsData = [
	{
		sectionName:"Politics",
		sectionData:[
			{
				title:"says Donald Trump spreading 'a virulent strain of virus'",
				description:"",
				auther:"Jonnathan Doe",
				image:"https://new-cdn.mamamia.com.au/mamamia-pwa.appspot.com/cms_images/variations/1200x800-117065643864.jpg"
			},
			{
				title:"Jenny Lawson Is Publishing a New Book and It's Sort of a Coloring Book",
				description:"",
				auther:"Jonnathan Doe",
				image:"https://media.univcomm.cornell.edu/photos/377x212/2FC52827-DF0E-0F4A-25A8BFFC9A030A8A.jpg"
			},
			{
				title:"Airtel Offers 3 GB Free Data A Month To Customers Who Switch To Its 4G Service",
				description:"",
				auther:"Alice Doe",
				image:""
			},
			{
				title:"Airtel Offers 3 GB Free Data A Month To Customers Who Switch To Its 4G Service",
				auther:"Alex Parkinson",
				description:"",
				image:""
			},
			{
				title:"Airtel Offers 3 GB Free Data A Month To Customers Who Switch To Its 4G Service",
				auther:"Alex Parkinson",
				description:"",
				image:""
			},
			{
				title:"Sundar Pichai Launches 'Digital Unlocked' Programme",
				auther:"Jonnathan Doe",
				description:"",
				image:""
			},
			{
				title:"Warning Letter For Ankleshwar Plant Sends Wockhardt Shares To Near 2.5 Year Low",
				auther:"Alice Doe",
				description:"",
				image:""
			}
		]
	}
	
]


exports.fetchHomePageNews = (req,res,next) =>{
	return res.send({status:"Success",status_code:200,data:newsData})
}