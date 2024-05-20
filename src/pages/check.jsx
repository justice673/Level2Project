import React from 'react'


const testingPet = [
{
   title:"Cuddly Shih Tzu",
   name:"Cooper",
   description:"A sweet and cuddly Shih Tzu, loves to be pampered and is a great lap dog",
   breed:"Shih Tzu",
   age:" 7 months",
   image:"/images/pexels-Shih-Tzu.jpg",
   Price:"$840"
},
{
    title:"Energetic Border Collie",
    name:"Daisy",
    description:"An energetic and smart Border Collie, perfect for active owners who lo…",
    breed:"Border Collie",
    age:"13 months",
    image:"https://www.google.com/imgres?q=border%20collie%20puppy%2013%20months%20old&imgurl=https%3A%2F%2Fexternal-preview.redd.it%2Four-14-week-old-border-collie-puppy-and-my-new-side-kick-v0-pII0WAKi4vZVbL1PxU35ymR8ats9wY5PXlfxqS-t6L8.jpg%3Fwidth%3D1080%26crop%3Dsmart%26auto%3Dwebp%26s%3Dca3d22fac39f0013b6c1662c90be8fcab63afbc4&imgrefurl=https%3A%2F%2Fwww.reddit.com%2Fr%2FBorderCollie%2Fcomments%2F15vds4g%2Four_14_week_old_border_collie_puppy_and_my_new%2F&docid=BkdmPRNVCWN7TM&tbnid=WC5iPcHaYambYM&vet=12ahUKEwiCp4aLgpmGAxX2EFkFHU72B0MQM3oECB8QAA..i&w=1080&h=810&hcb=2&ved=2ahUKEwiCp4aLgpmGAxX2EFkFHU72B0MQM3oECB8QAA",
    Price:"$880",
},
{
    title:"Gentle German Shepherd",
    name:"Rocky",
    description:"A protective and gentle German Shepherd, great for families and as a c…",
    breed:"German Shepherd",
    age:"3 weeks",
    image:"https://www.google.com/imgres?q=german%20shepherd%20puppies%203%20weeks%20old&imgurl=http%3A%2F%2Fbestdogbreedinfo.com%2Fwp-content%2Fuploads%2F2018%2F07%2F3-week-old-german-shepherd-pups.jpg&imgrefurl=https%3A%2F%2Fwww.cosmecinc.com%2F%3Fc%3Dcos6-42-6556537-6-17-57-3%2Bweeks%2Bgerman%2Bshepherd%2Bpuppies&docid=ddOJGv_30FnSZM&tbnid=D3vcRLvBFcN8PM&vet=12ahUKEwip9_jWgZmGAxX3F1kFHadVDkUQM3oECGAQAA..i&w=1024&h=760&hcb=2&ved=2ahUKEwip9_jWgZmGAxX3F1kFHadVDkUQM3oECGAQAA",
    Price:"$1800",
},
{
    title:"shy Cocker Spaniel",
    name:"Lola",
    description:"A cheerful and affectionate Cocker Spaniel, loves being around people …",
    breed:"Cocker Spaniel",
    age:"1 month",
    image:"https://www.google.com/imgres?q=cocker%20spaniel%20puppies%203%20weeks%20old&imgurl=https%3A%2F%2Fcdn.nikoncafe.com%2Fattachments%2Fdsc_1588-jpg.1624205%2F&imgrefurl=https%3A%2F%2Fwww.nikoncafe.com%2Fthreads%2Fcocker-spaniel-puppies-3-weeks-old.313006%2F&docid=Dvmq9swYdZ0ciM&tbnid=8z1dyMRdJqpNAM&vet=12ahUKEwjitry0gZmGAxWRK1kFHRTUD6wQM3oECGYQAA..i&w=600&h=400&hcb=2&ved=2ahUKEwjitry0gZmGAxWRK1kFHRTUD6wQM3oECGYQAA",
    Price:"$590",
},
{
    "title": "Playful Pug",
    "name": "Jack",
    "description": "A playful and friendly Pug, known for its charming and sociable nature.",
    "breed": "Pug",
    "age": "3 weeks",
    "image": "https://www.google.com/imgres?q=pug%20puppy%203%20weeks%20old&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D723692262889759&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fpeakbullies%2F&docid=cWQGQHGekq6VFM&tbnid=IACsKAvfO4y9eM&vet=12ahUKEwidhbDygJmGAxV0MlkFHcHEBoYQM3oECBsQAA..i&w=2048&h=1152&hcb=2&ved=2ahUKEwidhbDygJmGAxV0MlkFHcHEBoYQM3oECBsQAA",
    "Price": "$700"
},
{
    "title": "Affectionate French Bulldog",
    "name": "Sadie",
    "description": "An affectionate and easygoing French Bulldog, enjoys short walks and lots of snuggles.",
    "breed": "French Bulldog",
    "age": "3 weeks",
    "image": "https://www.google.com/imgres?q=french%20bulldog%20puppy%203%20weeks%20old&imgurl=https%3A%2F%2Fi2.wp.com%2Fthefrenchbulldog.com%2Fwp-content%2Fuploads%2F2021%2F03%2FPhoto-Mar-13-11-43-10-AM.jpg%3Fssl%3D1&imgrefurl=https%3A%2F%2Fthefrenchbulldog.com%2Flitter-of-lilac-french-bulldog-puppies-2%2F&docid=awGFTblnxYuToM&tbnid=qp2UvlEF0mm8TM&vet=12ahUKEwj3yp_dgJmGAxW5MVkFHTubC28QM3oECCkQAA..i&w=2172&h=1360&hcb=2&ved=2ahUKEwj3yp_dgJmGAxW5MVkFHTubC28QM3oECCkQAA",
    "Price": "$900"
},
{
    "title": "Curious Dachshund",
    "name": "Molly",
    "description": "A curious and adventurous Dachshund, loves to explore and is very loyal.",
    "breed": "Dachshund",
    "age": "3 months",
    "image": "https://www.google.com/imgres?q=dachshund%203%20months%20old&imgurl=https%3A%2F%2Fimages.ctfassets.net%2Fub3bwfd53mwy%2FdnzX4Zmy7Z6ww1AR0dklN%2Fd157fba0bdde84bc0fdbc7ae024a75ea%2FDachshund_puppy__2_.png&imgrefurl=https%3A%2F%2Fwww.pawlicy.com%2Fblog%2Fdachshund-growth-and-weight-chart%2F&docid=jg8kDKzBQzxE_M&tbnid=7g3xUXNyJoNLrM&vet=12ahUKEwi5sai9gJmGAxUwF1kFHYFADpMQM3oECDgQAA..i&w=960&h=540&hcb=2&ved=2ahUKEwi5sai9gJmGAxUwF1kFHYFADpMQM3oECDgQAA",
    "Price": "$670"
},
{
    "title": "Shy Jack Russell",
    "name": "Buddy",
    "description": "A lively and energetic Jack Russell Terrier, perfect for active families.",
    "breed": "Jack Russell Terrier",
    "age": "6 months",
    "image": "https://www.google.com/imgres?q=jack%20russell%20terrier%206%20months%20old&imgurl=https%3A%2F%2Fimages.ctfassets.net%2Fub3bwfd53mwy%2F4i6B18w1vra5qUPkFdrWFY%2F95399b322f24587bee749085d46938dd%2FTuna_steak__5_.png&imgrefurl=https%3A%2F%2Fwww.pawlicy.com%2Fblog%2Fjack-russell-terrier-growth-and-weight-chart%2F&docid=0lhoZHMBZ2SvWM&tbnid=cF86iL37nKdqiM&vet=12ahUKEwjP08GDgJmGAxWEMlkFHaT3BTwQM3oECEkQAA..i&w=960&h=540&hcb=2&ved=2ahUKEwjP08GDgJmGAxWEMlkFHaT3BTwQM3oECEkQAA",
    "Price": "$660"
},

  // Fix it after
  {
    "title": "Vibrant African Grey Parrot",
    "name": "Oliver",
    "description": "Oliver is a highly intelligent African Grey Parrot known for his remarkable ability to mimic speech and sounds. He loves interacting with people and is looking for a home where he can continue to develop his skills.",
    "breed": "African Grey",
    "age": "5 years",
    "image": "https://example.com/images/african_grey_parrot.jpg"
},
{
    "title": "Colorful Macaw Parrot",
    "name": "Bella",
    "description": "Bella is a strikingly beautiful Macaw with vibrant feathers and a friendly personality. She enjoys socializing and being the center of attention, making her a delightful companion.",
    "breed": "Macaw",
    "age": "3 years",
    "image": "https://example.com/images/macaw_parrot.jpg"
},
{
    "title": "Charming Cockatoo",
    "name": "Charlie",
    "description": "Charlie is a playful Cockatoo with a lovely crest and a sweet temperament. He loves to show off his tricks and enjoys being around people, making him a fun and loving pet.",
    "breed": "Cockatoo",
    "age": "4 years",
    "image": "https://example.com/images/cockatoo.jpg"
},
{
    "title": "Beautiful Lovebird Pair",
    "name": "Lily and Max",
    "description": "Lily and Max are a pair of colorful Lovebirds that are inseparable and full of energy. They love to play together and bring joy to any home with their vibrant personalities.",
    "breed": "Lovebird",
    "age": "2 years",
    "image": "https://example.com/images/lovebirds.jpg"
},
{
    "title": "Playful Amazon Parrot",
    "name": "Rio",
    "description": "Rio is an Amazon Parrot that loves to talk and interact with people. He is full of energy and enjoys learning new words and tricks, making him a lively addition to any family.",
    "breed": "Amazon Parrot",
    "age": "6 years",
    "image": "https://example.com/images/amazon_parrot.jpg"
},
{
    "title": "Friendly Alpaca",
    "name": "Daisy",
    "description": "Daisy is a gentle Alpaca with soft fleece, perfect for a small farm or petting zoo. She is very friendly and enjoys being around people and other animals, making her a wonderful companion.",
    "breed": "Alpaca",
    "age": "3 years",
    "image": "https://example.com/images/alpaca.jpg"
},
{
    "title": "Miniature Horse",
    "name": "Coco",
    "description": "Coco is a charming miniature horse that is great with children and easy to care for. She has a sweet disposition and loves being groomed and petted, making her a delightful pet for any family.",
    "breed": "Miniature Horse",
    "age": "4 years",
    "image": "https://example.com/images/miniature_horse.jpg"
},
{
    "title": "Playful Nigerian Dwarf Goat",
    "name": "Pip",
    "description": "Pip is a playful and affectionate Nigerian Dwarf Goat that is easy to handle. He enjoys playing with toys and interacting with people, making him a fun addition to any small farm or petting zoo.",
    "breed": "Nigerian Dwarf Goat",
    "age": "2 years",
    "image": "https://example.com/images/nigerian_dwarf_goat.jpg"
},
{
    "title": "Curious Potbellied Pig",
    "name": "Wilbur",
    "description": "Wilbur is a curious and intelligent potbellied pig, perfect for a small farm. He loves exploring his surroundings and enjoys interacting with people, making him a charming and engaging pet.",
    "breed": "Potbellied Pig",
    "age": "1 year",
    "image": "https://example.com/images/potbellied_pig.jpg"
},
{
    "title": "Gentle Jersey Cow",
    "name": "Bessie",
    "description": "Bessie is a gentle Jersey cow known for her high-quality milk production. She is very friendly and enjoys being around people, making her a wonderful addition to any farm.",
    "breed": "Jersey Cow",
    "age": "5 years",
    "image": "https://example.com/images/jersey_cow.jpg"
}
]
function check() {
  return (
    <div>check</div>
  )
}

export default check