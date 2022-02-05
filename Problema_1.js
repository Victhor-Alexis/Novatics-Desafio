const SortAndRemove = (arr) => {
    arr.sort((n1,n2) => (n1 - n2)); // Colocando em ordem crescente

    for (let i = 0; i < arr.length; ++i) { // removendo elementos duplicados
        if (i > 0 && arr[i] == arr[i-1]) {
            arr.splice(i, 1)
            --i 
            /* antes, o algoritmo estava 'pulando' a posição, o que impedia de
               de eliminar mais de dois elementos repetidos */  
	    }
    }

    return arr;
}

// Testes:
console.log(SortAndRemove([8, 5, 10, 5, 2, 4, 4, 3]));
console.log(SortAndRemove([6, 10, 9, 31, 42, 53]))
console.log(SortAndRemove([10, 10, 9, 8, 7, 9]))
console.log(SortAndRemove([200, -300, -9, 13, -88, 7, -88]))
console.log(SortAndRemove([12, 7, 7, 7, 10, 10, 10, 10, 10, 9, 9, 9, 9]))
