$(document).ready(function(){var path=window.location.pathname;var clean_path=decodeURIComponent(path);var section=clean_path.replace('/','').replace(" ",'');var a_exceptions={0:'nie',1:'extranjeria',2:'pasaporte',3:'dni',4:'residencia_y_trabajo'};var b_hide=false;$.each(a_exceptions,function(index,value){if(section==value){$('.navbar-toggler').hide();b_hide=true;}});if($(window).outerWidth()<768&&b_hide==true){$('.navbar-toggler').remove();}
var verifyCallback=function(response){$.get("/php/form-information.php",function(data){$('#example3').slideToggle().html('');$('#textoinfo').slideToggle().html('');$("#contactInfo").html(data).slideToggle();});};$('#checkCaptcha').on('click',function(event){event.preventDefault();let answer_value=$('#captchaAnswer').val();if(answer_value.length>0){$.ajax({url:'/php/form-information.php',type:'post',data:{answer:answer_value,lang:'en'},dataType:'json'}).done(function(data){if(data.status=='ok'){console.log(data.html)
$('#captchaContainer').slideToggle().html('');$("#contactInfoContainer").html(data.html).slideToggle();return true;}else{console.log('adios')
$('#captchaContainer').append('<p class="text-danger text-center">'+data.resp+'</p>');}}).fail(function(error){console.log(error);$('#contactInfoContainer').slideToggle().html('');});}
return false;});var ocutarButton=false;if($("#buttonBotton").length){var options={root:document.querySelector('#scrollArea'),rootMargin:'100px',threshold:0}
function buttonVisible(entries,observer){if(entries[0].isIntersecting){ocutarButton=true;}else{ocutarButton=false;}}
ocutarButton=new IntersectionObserver(buttonVisible,options);const element=document.querySelector('#buttonBotton');ocutarButton.observe(element);}
var b_show=$("#btn-comprar").hasClass('boton-scroll');var inInterstitialLanding=false;if($("#interstitial").length>0)
inInterstitialLanding=true;$('#btn-comprar').toggleClass('boton-scroll');$(document).scroll(function(){if($(this).scrollTop()>150&&b_show&&!ocutarButton&&!inInterstitialLanding){$('#btn-comprar').fadeIn();}
else{$('#btn-comprar').fadeOut();}});$(document).scroll(function(){if($(this).scrollTop()>150&&inInterstitialLanding&&b_show_2&&!ocutarButtonInterstitial){$('#btn-comprar-interstitial').fadeIn();}
else{$('#btn-comprar-interstitial').fadeOut();}});var b_show_2=$("#btn-comprar-interstitial").hasClass('boton-scroll');$('#btn-comprar-interstitial').toggleClass('boton-scroll');var ocutarButtonInterstitial=false;if($(".buttonCTAInterstitial").length){var options={root:document.querySelector('#scrollArea'),rootMargin:'100px',threshold:0}
function buttonVisible(entries,observer){if(entries[0].isIntersecting){ocutarButtonInterstitial=true;}else{ocutarButtonInterstitial=false;}}
ocutarButtonInterstitial=new IntersectionObserver(buttonVisible,options)
const elements=document.querySelectorAll('.buttonCTAInterstitial')
elements.forEach(function(cta){ocutarButtonInterstitial.observe(cta)});}
$(document).scroll(function(){if($(this).scrollTop()>150&&inInterstitialLanding&&b_show_2&&!ocutarButtonInterstitial){$('#btn-comprar-interstitial').fadeIn();}
else{$('#btn-comprar-interstitial').fadeOut();}});var names=['Michael','Peter','Justin','Diana','Kim','Donald','Jennifer','Bill','Taylor','James','David','George','Loan','Emma','Isabella','Mia'];var places=['Jacksonville, FL','Memphis, TN','Detroit, MI','Baltimore, MD','Miami, FL','Pittsburgh, PA','Toledo, OH','Orlando, FL','Reno, NV','Vancouver, WA'];var showToastInterstitial=false;if($("#interstitial").length>0){showToastInterstitial=true;}
if(showToastInterstitial){setInterval(()=>{var i=Math.floor(Math.random()*15);var j=Math.floor(Math.random()*8);$("#nameBuy").text(names[i]+'. from '+places[j])
$("#wpfomo-interstitial").addClass('is-visible');setTimeout(()=>{$("#wpfomo-interstitial").removeClass('is-visible');},6000);},15000);}
if($(".landind-interstitial").length>0){$('.principal-header').css({'display':'none'});$('#interstitial-footer').show();$('#general-footer').hide();}
else{$('#interstitial-footer').hide();}
if($(".landing-page").length>0){$('#header-home').show();}});