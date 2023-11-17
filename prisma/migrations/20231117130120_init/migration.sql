-- CreateTable
CREATE TABLE "User" (
    "id_user" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "idLeilao" TEXT,
    "idLance" TEXT,
    CONSTRAINT "User_idLeilao_fkey" FOREIGN KEY ("idLeilao") REFERENCES "Leilao" ("idLeilao") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "User_idLance_fkey" FOREIGN KEY ("idLance") REFERENCES "Lance" ("idLance") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Lance" (
    "idLance" TEXT NOT NULL PRIMARY KEY,
    "valor" REAL NOT NULL,
    "idLeilao" TEXT NOT NULL,
    CONSTRAINT "Lance_idLeilao_fkey" FOREIGN KEY ("idLeilao") REFERENCES "Leilao" ("idLeilao") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Leilao" (
    "idLeilao" TEXT NOT NULL PRIMARY KEY,
    "produto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "dataLimite" DATETIME NOT NULL,
    "listaLances" TEXT NOT NULL
);
