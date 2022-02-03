-- CreateTable
CREATE TABLE `battle` (
    `id` INTEGER NOT NULL,
    `open` BOOLEAN NOT NULL,
    `hostPlayer` VARCHAR(191) NOT NULL,
    `guestPlayer` VARCHAR(191) NULL,
    `hostPerks` JSON NULL,
    `guestPerks` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
