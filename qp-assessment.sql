-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 29, 2024 at 09:36 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qp-assessment`
--

-- --------------------------------------------------------

--
-- Table structure for table `groceries`
--

CREATE TABLE `groceries` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `unit` varchar(255) NOT NULL DEFAULT 'kg',
  `value` int(11) NOT NULL DEFAULT 1,
  `price` double NOT NULL,
  `stock` int(11) NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `groceries`
--

INSERT INTO `groceries` (`id`, `name`, `unit`, `value`, `price`, `stock`, `createdAt`, `updatedAt`) VALUES
(1, 'Tomato', 'kg', 1, 100, 10, '2024-01-29 20:22:57', '2024-01-29 20:22:57'),
(2, 'Potato', 'kg', 1, 150, 50, '2024-01-29 20:22:57', '2024-01-29 20:22:57'),
(3, 'eggs', 'kg', 1, 50, 10, '2024-01-29 20:23:12', '2024-01-29 20:23:12');

-- --------------------------------------------------------

--
-- Table structure for table `order-details`
--

CREATE TABLE `order-details` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `unit` varchar(255) NOT NULL DEFAULT 'kg',
  `value` int(11) NOT NULL DEFAULT 1,
  `price` double NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `orderId` int(11) DEFAULT NULL,
  `groceryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'User',
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `userName`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'anas', '$2b$10$GLkLSkoxaYLVYXCYBTw.iOxx6gF7R9z4SF2nKUuNcxhHC.4R7wvjy', 'Admin', '2024-01-29 20:20:38', '2024-01-29 20:20:38'),
(2, 'john', '$2b$10$OtNpWe9uxdzsPNbO8gEJw.Pfu1qPAUSnt9/6WhIMhivVnpcn2Puwm', 'User', '2024-01-29 20:21:00', '2024-01-29 20:21:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `groceries`
--
ALTER TABLE `groceries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order-details`
--
ALTER TABLE `order-details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_0c68ae620c5afc63469e3e46b09` (`orderId`),
  ADD KEY `FK_8decfc1a6fcf78c6723aecca68c` (`groceryId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_151b79a83ba240b0cb31b2302d1` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_226bb9aa7aa8a69991209d58f5` (`userName`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `groceries`
--
ALTER TABLE `groceries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `order-details`
--
ALTER TABLE `order-details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order-details`
--
ALTER TABLE `order-details`
  ADD CONSTRAINT `FK_0c68ae620c5afc63469e3e46b09` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_8decfc1a6fcf78c6723aecca68c` FOREIGN KEY (`groceryId`) REFERENCES `groceries` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FK_151b79a83ba240b0cb31b2302d1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
