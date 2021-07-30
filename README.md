# ⚛ Tugas Asisten Lab Programming ⚛
> Membuat aplikasi doraemonangis ecommerce app

## General Info
Pada tugas ini saya membuat backend dengan golang dan frontend dengan reactjs dan css dan sudah di dockerize. Aplikasi ini mampu melakukan fitur menampilkan store, menambah dan mengurangi store, melakukan filter search store berdasarkan provinsi dan kecamatan, mengedit store, mengedit dorayaki, menambah varian dorayaki, menambahkan gambar pada dorayaki.

## Dependencies
* Go 1.13
* React
* Yarn

## 💢 How To Use
1. Front-end command: 
<ul>
  <li> yarn
  </li>
  <li>yarn start
  </li>
  *Untuk memasukkan image, copy image kedalam folder public, yaitu labpro-frontend/public lalu sesuaikan namanya saat add variant dorayaki, contoh nama image yang dicopy : image.png, maka dalam input gambar juga harus image.png, jika tidak image akan fallback ke gambar default.
</ul>
    
2. Back-End command: 
<ul>
  <li>./scripts/run-prod.sh
  </li>
</ul>

3. Back-End command addition: 
<ul>
  <li>Jika anda ingin mereset seeds, maka jalankan ./scripts/migrate_down.sh lalu ./scripts/migrate_up.sh
  </li>
  <li>Setelah itu lakukan seeding dengan menuju/membuka end point api.marcellof.me/seeds</li>
  <li>Jika ingin merubah isi seeds, dapat menuju pkg/seeds/seeds.go lalu tinggal edit sesuai keinginan</li>
</ul>


## Author
* Marcello Faria (13519086)
    
