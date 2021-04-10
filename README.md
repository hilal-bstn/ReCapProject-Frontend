# ReCapProject(Front-End) 

![](https://user-images.githubusercontent.com/77468985/108639180-479f1a80-74a4-11eb-9e9b-8bd51907e836.png) 
#
&#9733;<b> Bu proje, Engin Demiroğ'un eğitmenliğini yaptığı "Yazılım Geliştirici Yetiştirme Kampı" nda geliştirilen <a href="https://github.com/hilal-bstn/FinalProject-Frontend">FinalProject</a> ile senkron bir şekilde geliştirilmiştir.<br>
  
<b>ReCapProject, SOLID prensiplerine bağlı kalınarak ve N-Katmalı mimari yapısıyla C# programlama diline ait; henüz geliştirilme aşamasında olan bir araç kiralama projesidir. Şu anda projenin Angular teknolojisi kullanılarak oluşturulmuş front-end kısmını incelemektesiniz.
  
<td>&#128206;<ins><b>Projenin back-end kısmına <a href="https://github.com/hilal-bstn/ReCapProject/blob/master/README.md">buradan</a> ulaşabilirsiniz.</ins><br><br>
   
<ul type="circle">
					<td>&#128230;<ins><b>Projeye entegre edilen modüller(node_modules)</b></ins>
					<ul>
				<td>&#128205;<t> <code>Bootstrap</code><br>
          <td>&#128205;<t> <code>Jquery</code><br>
            <td>&#128205;<t> <code>ngx-toastr</code><br>
					</ul>
					</ul>

<b>Angular kullanarak oluşturduğumuz front-end kısmında Models, Services, Components, Pipes,Guards ve Interceptors klasörlerimiz bulunmaktadır. Bu klasörleri yakından inceleyelim:

## Models

<b>Bu klasör altındaki typescript dosyaları ReCapProject 'in backend kısmındaki Entities klasöründe bulunan nesnelere karşılık gelmektedir. Bu klasör Back-End den gelen ve Front-End den gönderilen verilerin düzenlenmesi amacıyla oluşturulmuştur. Back-end kısmındaki Entities Layer kısmına <a href="https://github.com/hilal-bstn/ReCapProject/blob/master/README.md#entities-layer"> buradan</a> ulaşabilirsiniz.
<tr>
        <td>&#128194; </tr><a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/models">Models</a>
                                <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/brand.ts">brand.ts</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/car.ts">car.ts</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/carDetailsDto.ts">carDetailsDto.ts</a><br>
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/color.ts">color.ts</a><br>
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/color.ts">car_image.ts</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/customerDeatailsDto.ts">customerDetailsDto.ts</a><br>
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/listResponseModel.ts">listResponseModel.ts</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/rental.ts">rental.ts</a><br>
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/rentalDetailsDto.ts">rentalDetailsDto.ts</a><br>
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/responseModel.ts">responseModel.ts</a><br>
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/singleResponseModel.ts">singleResponseModel.ts</a><br>
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/tokenModel.ts">tokenModel.ts</a><br>
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/loginModel.ts">loginModel.ts</a><br>
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/registerModel.ts">registerModel.ts</a><br>
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/user.ts">user.ts</a><br>
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/userCreditCard.ts">userCreditCard.ts</a><br>  
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/userDetailsDto.ts">userDetailsDto.ts</a><br> 
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/userUpdateModel.ts">userUpdateModel.ts</a><br> 
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/passwordUpdate.ts">passwordUpdate.ts</a><br> 



   </ul>
  </li>
			
</ul>		

## Services

<b>Services klasörü altındaki dosyalarımız back-endde olan WebAPI kısmına istekte bulunmamızı sağlar. WebAPI alınan isteği back-end kısmımızda bulunan operasyonlara iletir ona karşılık bir sonuç gelir. Her bir typescript dosyası WebAPI de ki bir Controllera denk gelmektedir.  Back-end kısmındaki WebAPI kısmına <a href="https://github.com/hilal-bstn/ReCapProject/blob/master/README.md#webapi"> buradan</a> ulaşabilirsiniz. Aşağıdaki bağlantıları kullanarak Services klasörünün detaylarına erişebilirsiniz.

<tr>
        <td>&#128194; </tr><a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/services">Services</a>
                                <ul type="circle">
  					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/services/auth.service.ts">auth.service.ts</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/services/brand.service.ts">brand.service.ts</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/services/car.service.ts">car.service.ts</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/services/carimage.service.ts">carimage.service.ts</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/services/color.service.ts">color.service.ts</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/services/customer.service.ts">customer.service.ts</a><br>                           <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/services/rental.service.ts">rental.service.ts</a><br>
<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/services/customer-findeks-score.service.ts">customerFindeksScore.service.ts</a><br>           <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/services/rental.service.ts">rentals.service.ts</a><br>
<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/services/local-storage.service.ts">local-storage.service.ts</a><br>
  <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/services/user-credit-card.service.ts">user-credit-card.service.ts</a><br>
				</ul>
  </li>
			
</ul>	


## Components
  
  <b>Back-end kısmızdan gelen operasyon sonuçlarına göre, bu sonuçların son kullanıcıya nasıl iletilmesi gerektiğini düzenlediğimiz kısım bu klasör altındaki dosyalarımızdır. Aşağıdaki bağlantıları kullanarak detayları inceleyebilirsiniz.
  
  <tr>
        <td>&#128194; </tr><a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components">Components</a>
              
  <ul type="circle">
  <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/naviComponents">Navi Components</a><br>
              <ul type="circle">
                <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/naviComponents/navi">navi</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/naviComponents/navi/navi.component.css">navi.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/naviComponents/navi/navi.component.html">navi.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/naviComponents/navi/navi.component.ts">navi.component.ts</a><br>
            <br><br>
				</ul>
        <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/naviComponents/auth-menu">auth-menu</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/naviComponents/auth-menu/auth-menu.component.css">auth-menu.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/naviComponents/auth-menu/auth-menu.component.html">auth-menu.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/naviComponents/auth-menu/auth-menu.component.ts">auth-menu.component.ts</a><br>
            <br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![navi4](https://user-images.githubusercontent.com/77468985/113462670-b7e97600-942a-11eb-815e-6457d315b608.png)<br>
![authmenu](https://user-images.githubusercontent.com/77468985/114284013-ad943100-9a55-11eb-8703-621678167326.png)

 <br>	
				
  </ul>
    </ul>
  <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/authComponents">Auth Components</a><br>
              <ul type="circle">
  <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/authComponents/login">Login</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/authComponents/login/login.component.css">login.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/authComponents/login/login.component.html">login.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/authComponents/login/login.component.ts">login.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![loginerror](https://user-images.githubusercontent.com/77468985/112869700-17abee00-90c6-11eb-8542-4d81ec632d48.png)
![loginsuccess](https://user-images.githubusercontent.com/77468985/112869777-314d3580-90c6-11eb-81b0-dbe24994fab5.png)

  </ul>
  <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/authComponents/register">Register</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/authComponents/register/register.component.css">register.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/authComponents/register/register.component.html">register.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/authComponents/register/register.component.ts">register.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
 ![registerError](https://user-images.githubusercontent.com/77468985/112870347-c8b28880-90c6-11eb-86be-f28e2ef6b291.png)
![registersuccess](https://user-images.githubusercontent.com/77468985/112870368-ccdea600-90c6-11eb-9ca2-d6c86198607e.png)
        </ul>
        <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/authComponents/profile-update">Profile Update</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/authComponents/profile-update/profile-update.component.css">profile-update.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/authComponents/profile-update/profile-update.component.html">profile-update.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/authComponents/profile-update/profile-update.component.ts">profile-update.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![profile-update](https://user-images.githubusercontent.com/77468985/113461605-e749b400-9425-11eb-8d72-2d0ac1346832.png)
        </ul>
          <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/authComponents/password-update">Password Update</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/authComponents/password-update/password-update.component.css">password-update.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/authComponents/password-update/password-update.component.html">password-update.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/authComponents/password-update/password-update.component.ts">password-update.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![passwordupdate](https://user-images.githubusercontent.com/77468985/114284399-41ff9300-9a58-11eb-82c7-dd7ef3bac525.png)
        </ul>
  </ul>
  </ul>
  <ul type="circle">
  <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/brandComponents">Brand Components</a><br>
              <ul type="circle"> 
  <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/brand">brand</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/brandComponents/brand">brand.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/brandComponents/brand/brand.component.html">brand.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/brandComponents/brand/brand.component.ts">brand.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
 ![brand](https://user-images.githubusercontent.com/77468985/112490220-3d688880-8d90-11eb-9d44-9c348ae73a36.png) <br>
        </ul>  
        <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/brandComponents/brand-add">brand-add</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/brandComponents/brand-add/brand-add.component.css">brand-add.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/brandComponents/brand-add/brand-add.component.html">brand-add.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/brandComponents/brand-add/brand-add.component.ts">brand-add.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
          
![brand-add](https://user-images.githubusercontent.com/77468985/112525969-7d406780-8db2-11eb-8171-f267b7b1a953.png)
  
<br>
				</ul>
        <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/brandComponents/brand-update">brand-update</a><br>
             <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/brandComponents/brand-update/brand-update.component.css">brand-update.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/brandComponents/brand-update/brand-update.component.html">brand-add.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/brandComponents/brand-update/brand-update.component.ts">brand-add.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
          
![brand-update](https://user-images.githubusercontent.com/77468985/112525922-7285d280-8db2-11eb-8012-b190f0adef23.png)  
<br>
				</ul>
        </ul>
        </ul>	
        <ul type="circle">
  <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/colorComponents">Color Components</a><br>
              <ul type="circle"> 
                <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/colorComponents/color">color</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/colorComponents/color/color.component.css">color.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/colorComponents/color/color.component.html">color.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/colorComponents/color/color.component.ts">color.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![colors](https://user-images.githubusercontent.com/77468985/112520397-6c8cf300-8dac-11eb-9546-6c94bf548e79.png)

 <br>
				</ul>
        <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/colorComponents/color-add">color-add</a><br>
             <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/colorComponents/color-add/color-add.component.css">color-add.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/colorComponents/color-add/color-add.component.html">color-add.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/colorComponents/color-add/color-add.component.ts">color-add.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
          
![color-add](https://user-images.githubusercontent.com/77468985/112526634-37d06a00-8db3-11eb-9a5f-4ca93dccb5c1.png)
  
<br>
				</ul>
     <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/colorComponents/color-update">color-update</a><br>
             <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/colorComponents/color-update/color-update.component.css">color-update.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/colorComponents/color-update/color-update.component.html">color-update.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/colorComponents/color-update/color-update.component.ts">color-update.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
          
![color-update](https://user-images.githubusercontent.com/77468985/112526649-3bfc8780-8db3-11eb-9081-f84aaaa9b500.png)

  
<br>
				</ul>   
                
 </ul>
    </ul>
     <ul type="circle">
  <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/carComponents">Car Components</a><br>
              <ul type="circle"> 
                <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/carComponents/car">car</a><br>
             <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/carComponents/car/car.component.css">car.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/carComponents/car/car.component.html">car.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/carComponents/car/car.component.ts">car.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![car](https://user-images.githubusercontent.com/77468985/112521319-6f3c1800-8dad-11eb-8613-a508f4d07786.png)


 <br>
				</ul>
        <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/carComponents/car-filter">car-filter</a><br>
             <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/carComponents/car-filter/car-filter.component.css">car-filter.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/carComponents/car-filter/car-filter.component.html">car-filter.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/carComponents/car-filter/car-filter.component.ts">car-filter.component.ts</a> <br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![filter](https://user-images.githubusercontent.com/77468985/112491771-b0263380-8d91-11eb-8b9a-ec50cecfef84.png)

 <br>
            </ul>
            <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/carComponents/car-add">car-add</a><br>
             <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/carComponents/car-add/car-add.component.css">car-add.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/carComponents/car-add/car-add.component.html">car-add.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/carComponents/car-add/car-add.component.ts">car-add.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![car-add](https://user-images.githubusercontent.com/77468985/112526270-d0b2b580-8db2-11eb-82e3-f8a4184a9f3b.png)
 <br>
				</ul>
        <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/carComponents/car-update">car-update</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/carComponents/car-update/car-update.component.css">car-update.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/carComponents/car-update/car-update.component.html">car-update.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/carComponents/car-update/car-update.component.ts">car-update.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![car-update](https://user-images.githubusercontent.com/77468985/112526438-fd66cd00-8db2-11eb-8c7f-5496c91b6d62.png)

 <br>
				</ul>
        <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/carComponents/car-detail">car-detail</a><br>
             <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/carComponents/car-detail/car-detail.component.css">car-detail.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/carComponents/car-detail/car-detail.component.html">car-detail.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/carComponents/car-detail/car-detail.component.ts">car-detail.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![detay1](https://user-images.githubusercontent.com/77468985/112520847-e6bd7780-8dac-11eb-9280-48815a9160ca.png)<br>
![detay2](https://user-images.githubusercontent.com/77468985/112520983-0c4a8100-8dad-11eb-9f73-e2cfad34018e.png)

 <br>
				</ul>
    </ul>
    </ul>
    <ul type="circle">
  <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/customerComponents">Customer Components</a><br>
              <ul type="circle"> 
                <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/customerComponents/customer">customer</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/customerComponents/customer/customer.component.css">customer.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/customerComponents/customer/customer.component.html">customer.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/customerComponents/customer/customer.component.ts">customer.component.ts</a><br><br>
				<td>&#128205;  <em>Çıktısı: <br>
              
![customers](https://user-images.githubusercontent.com/77468985/113462953-1531f700-942c-11eb-8c3b-9a7d3e76585d.png)

 <br>
				</ul>
    </ul>
    </ul>
    
  <ul type="circle">
  <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/rentalComponents">Rental Components</a><br>
              <ul type="circle">
                <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/rentalComponents/rental-list">rental-list</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/rentalComponents/rental-list/rental-list.component.css">rental-list.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/rentalComponents/rental-list/rental-list.component.html">rental-list.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/rentalComponents/rental-list/rental-list.component.ts">rental-list.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![rental-list2](https://user-images.githubusercontent.com/77468985/112880575-467c9100-90d3-11eb-8027-06a1e935f94d.png)

 <br>
				</ul>
        <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/rentalComponents/my-rentals">my-rentals</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/rentalComponents/my-rentals/my-rentals.component.css">my-rentals.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/rentalComponents/my-rentals/my-rentals.component.html">my-rentals.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/rentalComponents/my-rentals/my-rentals.component.css">my-rentals.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![myrentals](https://user-images.githubusercontent.com/77468985/114284470-d9fd7c80-9a58-11eb-826b-6254ae851e51.png)

 <br>
				</ul>
        <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/rentalComponents/rental">rental</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/rentalComponents/rental/rental.component.css">rental.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/rentalComponents/rental/rental.component.html">rental.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/rentalComponents/rental/rental.component.ts">rental.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![rental1](https://user-images.githubusercontent.com/77468985/113462828-84f3b200-942b-11eb-8f67-491d5ebda2a8.png)

 <br>
				</ul>
        <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/rentalComponents/payment">payment</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/rentalComponents/payment/payment.component.css">payment.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/rentalComponents/payment/payment.component.html">payment.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/rentalComponents/payment/payment.component.ts">payment.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![payment](https://user-images.githubusercontent.com/77468985/113462881-bf5d4f00-942b-11eb-9147-60d30bbe1c71.png)


 <br>
				</ul>
      </ul>
    </ul> 
          
  </li>
			
</ul>		


	


## Pipes

<b>Pipes klasörümüzle, sayfamızda gösterdiğimiz datalara filtreler oluşturabiliyoruz. <br> Aşağıdaki bağlantıları kullanarak detayları inceleyebilirsiniz.

<tr>
        <td>&#128194; </tr><a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/pipes">Pipes</a><br>
                                <ul type="circle">
  <td>&#128206;<ins>Alt kısımdaki filter-brand.pipe dosyamız araç listemizde bulanan marka kısmına göre, text kutumuza girilen karakterlere uygun sonuçların listelenmesini sağlar.  </ins> <br><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/pipes/filter-brand.pipe.ts">filter-brand.pipe.ts</a><br><br>
          
   <td>&#128206;<ins>Alt kısımdaki filter-color.pipe dosyamız araç listemizde bulanan renk kısmına göre, text kutumuza girilen karakterlere uygun sonuçların listelenmesini sağlar.  </ins> <br><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/pipes/filter-color.pipe.ts">filter-color.pipe.ts</a><br>
				</ul>
  </li>
			
</ul>		

## Guards

<b> Aşağıdaki bağlantıları kullanarak detayları inceleyebilirsiniz.

<tr>
        <td>&#128194; </tr><a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/guard">Guard</a><br>
                                <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/guard/auth.guard.ts">auth.guard.ts</a>
             <br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![guard1](https://user-images.githubusercontent.com/77468985/112691176-f9f44400-8e8d-11eb-92ad-519d7830394e.png)

 <br>	
				</ul>
  </li>
			
</ul>	

## Interceptors

<b> Aşağıdaki bağlantıları kullanarak detayları inceleyebilirsiniz.

<tr>
        <td>&#128194; </tr><a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/interceptors">Interceptors</a><br>
                                <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/interceptors/auth.interceptor.ts">auth.interceptor.ts</a>
             <br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![token](https://user-images.githubusercontent.com/77468985/112691864-ff9e5980-8e8e-11eb-87bf-044da4a5deb0.png)

 <br>	
				</ul>
  </li>
			
</ul>	


