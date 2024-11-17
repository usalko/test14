// src/example127.ts

const BIT_MASKS = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192,
    16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304,
    8388608, 16777216, 33554432, 67108864, 134217728, 268435456,
    536870912, 1073741824, 2147483648, ]

const swapBitsN32 = (n32: number, i: number, j: number): number => {
    const basis = ~BIT_MASKS[i] & ~BIT_MASKS[j] & n32
    const si = i > j ? (BIT_MASKS[i] & n32) >> (i - j): (BIT_MASKS[i] & n32) << (j - i)
    const sj = i > j ? (BIT_MASKS[j] & n32) << (i - j): (BIT_MASKS[j] & n32) >> (j - i)
    return basis | si | sj
}

export function example127(inputNumber: number, bytesCount: number): number {
    if (bytesCount < 1 || bytesCount > 4 || isNaN(bytesCount)) {
        throw `Bytes count should lay in range [1, 4] inclusive, but input number is ${bytesCount}`
    }
    let result = inputNumber
    const maxBitsCount = bytesCount * 8
    for (let i = 0; i < maxBitsCount / 2; i ++) {
        result = swapBitsN32(result, i, maxBitsCount - i - 1)
    }
    return result
}

