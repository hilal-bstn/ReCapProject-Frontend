# ReCapProject

![](https://user-images.githubusercontent.com/77468985/108639180-479f1a80-74a4-11eb-9e9b-8bd51907e836.png) 
#

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

Angular kullanarak oluşturduğumuz front-end kısmında Models, Services, Components, Pipes klasörlerimiz bulunmaktadır. Bu klasörleri yakından inceleyelim:

## Models

<b>Bu klasör altındaki typescript dosyaları ReCapProject 'in backend kısmındaki Entities klasöründe bulunan nesnelere karşılık gelmektedir. Bu klasör back-end kısmımızdan bize gelen verilerin düzenlenmesi amacıyla oluşturulmuştur. Back-end kısmındaki Entities Layer kısmına <a href="https://github.com/hilal-bstn/ReCapProject/blob/master/README.md#entities-layer"> buradan</a> ulaşabilirsiniz.
<tr>
        <td>&#128194; </tr><a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/models">Models</a>
                                <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/brand.ts">brand.ts</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/car.ts">car.ts</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/carDetailsDto.ts">carDetailsDto.ts</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/color.ts">car_image.ts</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/customerDeatailsDto.ts">customerDetailsDto.ts</a><br>
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/listResponseModel.ts">listResponseModel.ts</a><br>
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/payment.ts">payment.ts</a><br>
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/payment.ts">payment.ts</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/rental.ts">rental.ts</a><br>
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/rentalDetailsDto.ts">rentalDetailsDto.ts</a><br>
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/models/responseModel.ts">responseModel.ts</a><br>
				</ul>
  </li>
			
</ul>		

## Services

<b>Services klasörü altındaki dosyalarımız back-endde olan WebAPI kısmına istekte bulunmamızı sağlar. WebAPI alınan isteği back-end kısmımızda bulunan operasyonlara iletir ona karşılık bir sonuç gelir. Her bir typescript dosyası WebAPI de ki bir Controllera denk gelmektedir.  Back-end kısmındaki WebAPI kısmına <a href="https://github.com/hilal-bstn/ReCapProject/blob/master/README.md#webapi"> buradan</a> ulaşabilirsiniz. Aşağıdaki bağlantıları kullanarak Services klasörünün detaylarına erişebilirsiniz.

<tr>
        <td>&#128194; </tr><a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/services">Services</a>
                                <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/services/brand.service.ts">brand.service.ts</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/services/car.service.ts">car.service.ts</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/services/carimage.service.ts">carimage.service.ts</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/services/color.service.ts">color.service.ts</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/services/customer.service.ts">customer.service.ts</a><br>
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/services/payment.service.ts">payment.service.ts</a><br>
          <td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/services/rental.service.ts">rentals.service.ts</a><br>
				</ul>
  </li>
			
</ul>	


## Components
  
  <b>Back-end kısmızdan gelen operasyon sonuçlarına göre, bu sonuçların son kullanıcıya nasıl iletilmesi gerektiğini düzenlediğimiz kısım bu klasör altındaki dosyalarımızdır. Aşağıdaki bağlantıları kullanarak detayları inceleyebilirsiniz.
  
  <tr>
        <td>&#128194; </tr><a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components">Components</a>
               <ul type="circle">
  <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/brand">brand</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/brand-add/brand.component.css">brand.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/brand-add/brand.component.html">brand.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/brand-add/brand.component.ts">brand.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
 ![brand](https://user-images.githubusercontent.com/77468985/112490220-3d688880-8d90-11eb-9d44-9c348ae73a36.png) <br>
        </ul>
					<td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/brand-add">brand-add</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/brand-add/brand-add.component.css">brand-add.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/brand-add/brand-add.component.html">brand-add.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/brand-add/brand-add.component.ts">brand-add.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
          
![brand-add](https://user-images.githubusercontent.com/77468985/112525969-7d406780-8db2-11eb-8171-f267b7b1a953.png)
  
<br>
				</ul>
					<td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/brand-update">brand-update</a><br>
             <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/brand-update/brand-update.component.css">brand-update.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/brand-update/brand-update.component.html">brand-add.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/brand-update/brand-update.component.ts">brand-add.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
          
![brand-update](https://user-images.githubusercontent.com/77468985/112525922-7285d280-8db2-11eb-8012-b190f0adef23.png)  
<br>
				</ul>
        <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/color">color</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/color/color.component.css">color.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/color/color.component.html">color.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/color/color.component.ts">color.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![colors](https://user-images.githubusercontent.com/77468985/112520397-6c8cf300-8dac-11eb-9546-6c94bf548e79.png)

 <br>
				</ul>
          
<td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/color-add">color-add</a><br>
             <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/color-add/color-add.component.css">color-add.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/color-add/color-add.component.html">color-add.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/color-add/color-add.component.ts">color-add.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
          
![color-add](https://user-images.githubusercontent.com/77468985/112526634-37d06a00-8db3-11eb-9a5f-4ca93dccb5c1.png)
  
<br>
				</ul>
          <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/color-update">color-update</a><br>
             <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/color-update/color-update.component.css">color-update.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/color-update/color-update.component.html">color-update.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/color-update/color-update.component.ts">color-update.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
          
![color-update](https://user-images.githubusercontent.com/77468985/112526649-3bfc8780-8db3-11eb-9081-f84aaaa9b500.png)

  
<br>
				</ul>   
					<td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/car">car</a><br>
             <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/car/car.component.css">car.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/car/car.component.html">car.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/car/car.component.ts">car.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![car](https://user-images.githubusercontent.com/77468985/112521319-6f3c1800-8dad-11eb-8613-a508f4d07786.png)


 <br>
				</ul>
             <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/car-filter">car-filter</a><br>
             <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/car-filter/car-filter.component.css">car-filter.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/car-filter/car-filter.component.html">car-filter.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/car-filter/car-filter.component.ts">car-filter.component.ts</a> <br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![filter](https://user-images.githubusercontent.com/77468985/112491771-b0263380-8d91-11eb-8b9a-ec50cecfef84.png)

 <br>
            </ul>
<td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/car-add">car-add</a><br>
             <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/car-add/car-add.component.css">car-add.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/car-add/car-add.component.html">car-add.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/car-add/car-add.component.ts">car-add.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![car-add](https://user-images.githubusercontent.com/77468985/112526270-d0b2b580-8db2-11eb-82e3-f8a4184a9f3b.png)
 <br>
				</ul>
        <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/car-update">car-update</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/car-update/car-update.component.css">car-filter.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/car-update/car-update.component.html">car-filter.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/car-update/car-update.component.ts">car-filter.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![car-update](https://user-images.githubusercontent.com/77468985/112526438-fd66cd00-8db2-11eb-8c7f-5496c91b6d62.png)

 <br>
				</ul>
					<td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/car-detail">car-detail</a><br>
             <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/car-detail/car-detail.component.css">car-detail.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/car-detail/car-detail.component.html">car-detail.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/car-detail/car-detail.component.ts">car-detail.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![detay1](https://user-images.githubusercontent.com/77468985/112520847-e6bd7780-8dac-11eb-9280-48815a9160ca.png)<br>
![detay2](https://user-images.githubusercontent.com/77468985/112520983-0c4a8100-8dad-11eb-9f73-e2cfad34018e.png)

 <br>
				</ul>
					<td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/customer">customer</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/customer/customer.component.css">customer.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/customer/customer.component.html">customer.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/customer/customer.component.ts">customer.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
          
![customers](https://user-images.githubusercontent.com/77468985/112527137-c349fb00-8db3-11eb-8338-1c167eb2656e.png)


  
<br>
				</ul>
          <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/navi">navi</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/navi/navi.component.css">navi.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/navi/navi.component.html">navi.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/navi/navi.component.ts">navi.component.ts</a><br>
            <br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![nav](https://user-images.githubusercontent.com/77468985/112491439-5de51280-8d91-11eb-86de-e07186d01d88.png)
 <br>	
				</ul>
          <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/rental-list">rental-list</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/rental-list/rental-list.component.css">rental-list.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/rental-list/rental-list.component.html">rental-list.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/rental-list/rental-list.component.ts">rental-list.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![rental-list](https://user-images.githubusercontent.com/77468985/112527303-fa201100-8db3-11eb-9633-540e060277e0.png)

 <br>
				</ul>
          <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/rental">rental</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/rental/rental.component.css">rental.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/rental/rental.component.html">rental.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/rental/rental.component.ts">rental.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![rental](https://user-images.githubusercontent.com/77468985/112521112-2edc9a00-8dad-11eb-948e-fc6f018e127e.png)

 <br>
				</ul>
        </ul>
          <td>&#128194;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/tree/master/src/app/components/payment">payment</a><br>
            <ul type="circle">
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/payment/payment.component.css">payment.component.css</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/payment/payment.component.html">payment.component.html</a><br>
					<td>&#x1F4C4;<a href="https://github.com/hilal-bstn/ReCapProject-Frontend/blob/master/src/app/components/payment/payment.component.ts">payment.component.ts</a><br><br>
				<td>&#128205; <em>Çıktısı: <br>
              
![payment](https://user-images.githubusercontent.com/77468985/112521704-e1acf800-8dad-11eb-8c85-ed789ed0baf3.png)

 <br>
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

