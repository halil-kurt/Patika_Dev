## Proje 1
[22,27,16,2,18,6] -> Insertion Sort

1. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
2. Big-O gösterimini yazınız.
3. Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.
4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.

5. [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

---

## Çozüm:


 * Sayıları sıralamaya ilk sayıdan başlıyoruz (yani 22).
 * İlk geçişte (pass) sadece 22 sayısı sıralanmış oluyor (yani hiçbirşey yapmıyoruz):
 * | işareti o ana kadar sıraladığımız sayıları ifade deiyor. Bu işaretin "|" solundaki sayıları sıralanmış kabul ediyoruz. Ve her geçişte bir sağındaki sayıyı alıyoruz.
 
 1. [22|27,16,2,18,6]

    2 . geçişte 22 ile 27 karşılaştırılıyor 22 küçük olduğu için yer değiştirme olmuyor.
 2. [22,27|16,2,18,6] 

    3 . geçişte 16 ile 27 karşılaştırıldı ve 16 küçük olduğu için 27 ile yer ddeğiştirdi.
 3. [22,16,27|2,18,6] Geçişimiz henüz bitmedi çünkü 16 22`den de küçük.

    [16,22,27|2,18,6] Şimdi üçüncü geçişi tamamladık artık 2`yi alabiliriz.

    Aynı şekilde devam ediyoruz.
 4. [2,16,22,27|,18,6]
 5. [2,16,18,22,27|,6]
 6. [2,6,16,18,22,27|] Ve dizimiz sıralanmış oldu.

 ## Time Complexity:
  Best Case: O (n)  

  Avarege Case: O (n^2)  
  
  worst Case: O (n^2)   


Dizi sıralandıktan sonra 18 avarage case kapsamına girer.

----

[7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımı.

1. [7|3,5,8,2,9,4,15,6]
2. [3,7|5,8,2,9,4,15,6]
3. [3,5,7|8,2,9,4,15,6]
4. [3,5,7,8|2,9,4,15,6]

## ornek kod 
```JavaScript

let arr = [1,0,-1,34,0,4]; 

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let current = arr[i];
        let j = i-1;

        while ((j > -1) && (current > arr[j])) {
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = current;
    }

    return arr;
}

console.log(insertionSort(arr));

```
