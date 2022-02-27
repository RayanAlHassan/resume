fetch(' https://myapijson.herokuapp.com//Data')
.then(response => response.json())
.then(json => {
    var RH = document.getElementById('RH');
    var OriginalContent = `
                              
                          <h5>Skills<span class="color-heading pull-right">Percentage%</span></h5>
                          <div class="progress">
                          <div class="progress-bar bg-color-base" role="progressbar" data-width="Percentage"></div>
                          </div>
                          
                       `;

     for(var i=0;i<json.length;i++)
     {
        var MyContent = document.createElement('div');
        var CustomisedContent = OriginalContent;
        CustomisedContent = CustomisedContent.replace('Skills',json[i].title);
        CustomisedContent = CustomisedContent.replace('Percentage',json[i].description);
        CustomisedContent = CustomisedContent.replace('Percentage',json[i].description);
       // MyContent.className='progress-box'
        MyContent.innerHTML = CustomisedContent;
        RH.appendChild(MyContent);
    }
    $('.progress').each(function() {
      $(this).appear(function() {
          $(this).animate({
              opacity: 1,
              left: "0px"
          }, 800);
          var w = $(this).find(".progress-bar").attr("data-width");
          var h = $(this).find(".progress-bar").attr("data-height");
          $(this).find(".progress-bar").animate({
              width: w + "%",
              height: h + "%"
          }, 100, "linear");
      });
  });
})


  fetch(' https://myapijson.herokuapp.com/')
  .then(response => response.json())
  .then(json =>{

    var age = document.getElementById("ageee")
    var originalage=` <div class=""    >
    <div class="pb-2" >twenieghit</div>
  </div>`
    for(var i=0; i<json.length;i++){

      var MyContentage = document.createElement("div");
     
    
      var customisedContentage= originalage;// krml ma kl l elements ytl3o nafs shi
    
      MyContentage.className='col-sm-7'
      MyContentage.innerHTML =customisedContentage;
     age.appendChild(MyContentage);
    console.log(MyContentage);
    }
    
      })



  fetch(' https://myapijson.herokuapp.com//aboutme')
  .then(response => response.json())
  .then(json =>{

    var mail = document.getElementById("about")
    var originalMail=` <div class="col-md-6">
    <h2 class="h2 fw-light mb-4">About Me</h2>
    <p >Hello! I’m Rayan Al Hassan.</p>
  </div>
  <div class="col-md-5 offset-lg-1">
    <div class="row mt-2">
      <h2 class="h2 fw-light mb-4">Bio</h2>
      <div class="col-sm-5"  >
        <div class="pb-2 fw-bolder"><i class="far fa-calendar-alt pe-2 text-muted" style="width:24px;opacity:0.85;"></i> Age</div>
      </div>
      <div class="col-sm-7"   >
        <div class="pb-2" >twenieghit</div>
      </div>
      <div class="col-sm-5">
        <div class="pb-2 fw-bolder"><i class="far fa-envelope pe-2 text-muted" style="width:24px;opacity:0.85;"></i> Email</div>
      </div>
      <div class="col-sm-7" >
        <div class="pb-2">walter@company.com</div>
      </div>
      
      <div class="col-sm-5">
        <div class="pb-2 fw-bolder"><i class="fas fa-phone pe-2 text-muted" style="width:24px;opacity:0.85;"></i> Phone</div>
      </div>
      <div class="col-sm-7">
        <div class="pb-2" >+0718-111-0011</div>
      </div>
     
    </div>
  </div>`
    for(var i=0; i<json.length;i++){

      var MyContentmail = document.createElement("div");
     
    
      var customisedContentmail = originalMail;// krml ma kl l elements ytl3o nafs shi
      customisedContentmail =customisedContentmail.replace("walter@company.com",json[i].mail);
      customisedContentmail =customisedContentmail.replace("+0718-111-0011",json[i].phone);
      customisedContentmail =customisedContentmail.replace(`Hello! I’m Rayan Al Hassan.`,json[i].aboutme);
      customisedContentmail =customisedContentmail.replace("twenieghit",json[i].myage);
      MyContentmail.className=''
      MyContentmail.innerHTML =customisedContentmail;
     about.appendChild(MyContentmail);
    console.log(MyContentmail);
    }
    
      })

      



              
          fetch(' https://myapijson.herokuapp.com//workExperience')
          .then(response => response.json())
          .then(json =>{
        
            var dateexp = document.getElementById("Experience")
            
            var originaldateexp=`    
            <div class="class="col-xxl-4">
           
             
              
                <p class="h5 fw-light mb-4" >May, 2015 - Present</p>
               <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
             
          </div>
                `
            for(var i=0; i<json.length;i++){
        
              var MyContentdateexp= document.createElement("div");
             
            
              var customisedContentdateexp= originaldateexp;// krml ma kl l elements ytl3o nafs shi
              customisedContentdateexp =customisedContentdateexp.replace(`May, 2015 - Present`,json[i].dateexp);
              customisedContentdateexp =customisedContentdateexp.replace(`Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.`,json[i].work);
              MyContentdateexp.className=''
              MyContentdateexp.innerHTML =customisedContentdateexp;
              dateexp.appendChild(MyContentdateexp);
            console.log(MyContentdateexp);
            }
            
              })

              
