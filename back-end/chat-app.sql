-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 26, 2024 at 12:16 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

﻿--
-- Database: `chat-app`
--
﻿
-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` varchar(255) NOT NULL,
  `createdAt` timestamp(2) NOT NULL DEFAULT current_timestamp(2),
  `roomId` varchar(255) NOT NULL,
  `authorId` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `isCore` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf16le COLLATE=utf16le_general_ci;
﻿
--
-- Dumping data for table `messages`
--

﻿INSERT INTO `messages` (`id`, `createdAt`, `roomId`, `authorId`, `content`, `isCore`) VALUES
('026adbdd-a9e8-48a7-91e7-6a5658a63edf', '2024-01-20 23:14:23.73', 'your_room_id_3', 'own', '5', 0)﻿,
('0db1801f-747d-4068-b5ec-434eefacc9b6', '2024-01-20 23:14:24.85', 'your_room_id_3', 'own', '7', 0)﻿,
('0ea66068-494c-47a2-83a0-1d6d98e2dc36', '2024-01-21 00:58:42.05', 'your_room_id_3', 'own', 'g', 0)﻿,
('11db7e9a-7b06-416c-94da-cfd665f657d6', '2024-01-20 23:14:49.22', 'your_room_id_3', 'own', 'f', 0)﻿,
('15ba5356-f33c-4f22-b595-b1fd00c81a12', '2024-01-22 16:18:57.94', 'your_room_id_3', 'own', 'yaaa', 0)﻿,
('184b9247-aa7f-43ac-9598-133e966694bb', '2024-01-22 01:03:24.51', 'your_room_id_3', 'own', 'fkfg', 0)﻿,
('1a3e8ce3-240c-4534-b019-b5872577e248', '2024-01-20 23:14:18.77', 'your_room_id_3', 'own', 'd', 0)﻿,
('1aa32776-2456-4878-90bd-006dbe15115b', '2024-01-22 01:15:46.35', 'your_room_id_4', 'own', 'lkjfdsdfsg', 0)﻿,
('249e7730-7c5b-4c15-a5bb-92dc690ca60c', '2024-01-20 23:09:13.00', 'your_room_id_3', 'own', '9', 0)﻿,
('26841877-1fd3-459f-8b52-5b9b5d2dabcf', '2024-01-20 23:09:17.00', 'your_room_id_3', 'own', '1', 0)﻿,
('28f93b56-fe46-40bc-91f7-e2832684cdcd', '2024-01-20 23:14:17.87', 'your_room_id_3', 'own', 'a', 0)﻿,
('3a52848f-6db5-42b2-b780-552b44fdc5d4', '2024-01-20 23:14:48.19', 'your_room_id_3', 'own', 'f', 0)﻿,
('3c69a8be-7116-4791-90d6-e7391179c296', '2024-01-22 16:19:39.07', 'your_room_id_3', 'own', 'sdfgfd', 0)﻿,
('3f168aa1-d10d-40e6-89f3-45bc7bcf1a71', '2024-01-20 23:15:33.53', 'your_room_id_3', 'own', 'f', 0)﻿,
('44c88297-9ff5-41b3-9647-c4534bb0e176', '2024-01-20 23:09:18.00', 'your_room_id_3', 'own', '4', 0)﻿,
('45df2f5e-e314-4f79-b0fd-3b0e44dda6b9', '2024-01-20 23:09:08.00', 'your_room_id_3', 'own', 'h', 0)﻿,
('47526733-a352-4117-8364-10370bf96812', '2024-01-20 23:18:41.40', 'your_room_id_3', 'own', 'd', 0)﻿,
('4ab4ba87-c686-4ba7-92ee-d47e65806b95', '2024-01-20 23:14:23.36', 'your_room_id_3', 'own', '4', 0)﻿,
('56899b1f-810c-484f-85d5-4b691a00a899', '2024-01-20 23:14:49.77', 'your_room_id_3', 'own', 'd', 0)﻿,
('5d6aa73c-8bad-4ca2-938b-1bb953ce0813', '2024-01-21 00:58:40.74', 'your_room_id_3', 'own', 'sdfsdf', 0)﻿,
('6054500e-f0b1-4b4c-8fae-f1217a59f056', '2024-01-20 23:09:08.00', 'your_room_id_3', 'own', 's', 0)﻿,
('63324423-15dd-4425-bf14-bf307a4e2c06', '2024-01-20 23:14:22.81', 'your_room_id_3', 'own', '2', 0)﻿,
('67ff7de1-9488-47a7-bec6-14f71f3dfafc', '2024-01-20 23:32:46.16', 'your_room_id_3', 'own', 'hu hu', 0)﻿,
('698f7838-ba63-449d-a002-e249fb300764', '2024-01-20 23:14:48.70', 'your_room_id_3', 'own', 'g', 0)﻿,
('71c38a76-b1cb-41b4-b697-175efafb57f6', '2024-01-21 00:58:41.74', 'your_room_id_3', 'own', 'g', 0)﻿,
('72604aa0-56eb-4712-8dce-983f8b54d2f3', '2024-01-20 23:09:09.00', 'your_room_id_3', 'own', 'v', 0)﻿,
('75b13807-113d-4fc5-b7b0-966ba77689b4', '2024-01-20 23:09:02.00', 'your_room_id_3', 'own', '2', 0)﻿,
('7c3a75c5-e542-4501-8c0e-2f6b0a629e18', '2024-01-20 23:09:12.00', 'your_room_id_3', 'own', '7', 0)﻿,
('7d3bfdfb-5203-4f06-9f86-06751cc90760', '2024-01-22 01:13:08.81', 'your_room_id_3', 'own', 'Lorem ispum bla bla bla aosidja iorewijadm', 0)﻿,
('817a7491-319d-475b-9ba8-fc9e70087f20', '2024-01-22 01:06:36.85', 'your_room_id_3', 'own', 'asldkg', 0)﻿,
('84753dd9-c225-45fd-a151-7230b0cb7b84', '2024-01-22 01:01:55.62', 'your_room_id_3', 'own', 'h', 0)﻿,
('85a66106-c254-4aa9-9972-9f0f5210ab36', '2024-01-21 00:58:42.58', 'your_room_id_3', 'own', 'g', 0)﻿,
('8ae128ad-9e6b-451b-93d4-ec7805c692ca', '2024-01-20 23:14:50.04', 'your_room_id_3', 'own', 'a', 0)﻿,
('8eab4e42-da7a-4678-9d27-e4546a03d7d1', '2024-01-20 23:14:26.63', 'your_room_id_3', 'own', '0', 0)﻿,
('90f11a07-768b-4e1d-9e43-ea13f5ea00ed', '2024-01-20 23:14:26.41', 'your_room_id_3', 'own', '9', 0)﻿,
('93274fef-0686-4bfb-9959-5f6f4da416e5', '2024-01-20 23:14:23.09', 'your_room_id_3', 'own', '3', 0)﻿,
('95aec60d-bf51-4945-bb88-cf3288389ff6', '2024-01-20 23:09:04.00', 'your_room_id_3', 'own', '3', 0)﻿,
('990ee32f-a9fd-4554-bb51-5ca031e58632', '2024-01-20 23:09:18.00', 'your_room_id_3', 'own', '3', 0)﻿,
('99447310-5b77-48bd-b2d4-a4915a2de52b', '2024-01-20 23:09:18.00', 'your_room_id_3', 'own', '2', 0)﻿,
('9abb9639-6395-468f-9680-d7dff6281511', '2024-01-20 23:09:13.00', 'your_room_id_3', 'own', '0', 0)﻿,
('9f170625-23b4-4034-bc71-9111e5cc4c26', '2024-01-20 23:14:49.49', 'your_room_id_3', 'own', 'd', 0)﻿,
('9f369892-f777-4518-87e1-20e7ca28a335', '2024-01-20 23:09:12.00', 'your_room_id_3', 'own', '8', 0)﻿,
('9f7c4232-8b33-4413-b8e1-311b626202a7', '2024-01-20 23:15:34.73', 'your_room_id_3', 'own', 'g', 0)﻿,
('9fadffd3-4196-4e3e-b04c-1ff179c927d6', '2024-01-20 23:09:01.00', 'your_room_id_3', 'own', '1', 0)﻿,
('a074592e-bd25-4c4c-9d4c-27fd01751a39', '2024-01-20 23:09:19.00', 'your_room_id_3', 'own', '5', 0)﻿,
('a3fbbd0d-209f-4da9-8edb-de8bc407b0ba', '2024-01-21 00:58:42.33', 'your_room_id_3', 'own', 'g', 0)﻿,
('a6a21d95-e014-4b06-8858-14b13fa9a0c5', '2024-01-22 16:19:06.17', 'your_room_id_3', 'own', 'thats what Im talking about babyy', 0)﻿,
('a94a3741-ca86-49fb-967d-2e4f3b0d666b', '2024-01-20 23:14:24.07', 'your_room_id_3', 'own', '6', 0)﻿,
('a9a0747c-abc9-403a-9be0-53960df05d78', '2024-01-20 23:09:05.00', 'your_room_id_3', 'own', '4', 0)﻿,
('aaa81937-6763-4339-ab72-a8b931bebeae', '2024-01-20 23:32:43.33', 'your_room_id_3', 'own', 'yuh', 0)﻿,
('aba2e598-730b-48b2-871a-b5caae696610', '2024-01-20 23:09:08.00', 'your_room_id_3', 'own', 'a', 0)﻿,
('b14d63db-f26c-432d-971c-b2404689a9d9', '2024-01-20 23:09:07.00', 'your_room_id_3', 'own', 'f', 0)﻿,
('b44835b0-fff9-4943-8900-f594632f6bf4', '2024-01-20 23:14:26.16', 'your_room_id_3', 'own', '8', 0)﻿,
('b7f7fdd0-71e6-4e4b-9634-060db733ef38', '2024-01-22 01:01:54.47', 'your_room_id_3', 'own', 'f', 0)﻿,
('b8d9dbd9-ff1d-4b95-8529-b721237acbff', '2024-01-20 23:09:07.00', 'your_room_id_3', 'own', 'f', 0)﻿,
('b8f3f145-a330-4fb4-8cb9-284dfeae2d50', '2024-01-22 01:13:44.35', 'your_room_id_3', 'own', 'Purus sit amet volutpat consequat. Volutpat est velit egestas dui id ornare arcu odio ut. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Urna porttitor rhoncus dolor purus non enim praesent.  Mauris in aliquam sem fringilla ut morbi. A scelerisque purus semper eget duis. Elementum facilisis leo vel fringilla. Id interdum velit laoreet id donec ultrices tincidunt arcu. Vitae nunc sed velit dignissim sodales ut eu sem integer. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus.', 0)﻿,
('bed73374-718e-4cdc-971a-2186fe158a5b', '2024-01-20 23:32:39.28', 'your_room_id_3', 'own', 'Ayo les gars!!!!', 0)﻿,
('bfce2283-b7dd-484c-aff8-35e0e0d6afbc', '2024-01-22 01:01:54.78', 'your_room_id_3', 'own', 'g', 0)﻿,
('c52d57dc-3b76-4c33-ad43-89707421b2e8', '2024-01-20 23:14:22.54', 'your_room_id_3', 'own', '1', 0)﻿,
('c762b038-4b90-4d33-8cbf-b8168043e09f', '2024-01-20 23:14:18.27', 'your_room_id_3', 'own', 's', 0)﻿,
('c77b21d9-2b71-423a-93d9-2271d16ec56e', '2024-01-20 23:14:15.99', 'your_room_id_3', 'own', 'f', 0)﻿,
('cb849400-d9dc-498a-8ad7-f6b29a17a6c3', '2024-01-20 23:14:16.83', 'your_room_id_3', 'own', 'g', 0)﻿,
('d2e79dc6-002a-48e7-bcee-ebeffa8dbde7', '2024-01-20 23:14:19.87', 'your_room_id_3', 'own', 'f', 0)﻿,
('d5ad1001-e261-40cc-8ffa-ec9603bf9eb3', '2024-01-22 01:01:53.95', 'your_room_id_3', 'own', 'asd', 0)﻿,
('d6506352-daf6-4dd8-9f71-2a0706d9ae99', '2024-01-20 23:09:07.00', 'your_room_id_3', 'own', 'f', 0)﻿,
('e67a4b14-bb67-4a16-b05b-dafe5ff805c6', '2024-01-22 01:03:23.34', 'your_room_id_3', 'own', 'dsfk', 0)﻿,
('ed05a6cc-118a-4956-8929-99b264eded9b', '2024-01-20 23:22:53.19', 'your_room_id_3', 'own', 'l', 0)﻿,
('f36cc570-3e51-4129-82fa-02d13e62f24a', '2024-01-20 23:22:51.90', 'your_room_id_3', 'own', 'l', 0)﻿;
﻿
-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` varchar(255) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `name` varchar(255) NOT NULL DEFAULT 'New Chat Room',
  `imageUrl` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16le COLLATE=utf16le_general_ci;
﻿
--
-- Dumping data for table `rooms`
--

﻿INSERT INTO `rooms` (`id`, `createdAt`, `name`, `imageUrl`) VALUES
('your_room_id_3', '2024-01-20', 'Yappertown', 'https://t4.ftcdn.net/jpg/02/01/10/87/360_F_201108775_UMAoFXBAsSKNcr53Ip5CTSy52Ajuk1E4.jpg')﻿,
('your_room_id_4', '2024-01-20', 'jeans koule', 'https://t4.ftcdn.net/jpg/02/01/10/87/360_F_201108775_UMAoFXBAsSKNcr53Ip5CTSy52Ajuk1E4.jpg')﻿;
﻿
-- --------------------------------------------------------

--
-- Table structure for table `room_user`
--

CREATE TABLE `room_user` (
  `roomId` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf16le COLLATE=utf16le_general_ci;
﻿
--
-- Dumping data for table `room_user`
--

﻿INSERT INTO `room_user` (`roomId`, `userId`, `createdAt`) VALUES
('your_room_id_1', 'your_user_id_1', '2024-01-20')﻿,
('your_room_id_1', 'your_user_id_2', '2024-01-20')﻿;
﻿
-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16le COLLATE=utf16le_general_ci;
﻿
--
-- Dumping data for table `users`
--

﻿INSERT INTO `users` (`id`, `createdAt`, `firstName`, `lastName`, `username`, `email`, `password`) VALUES
('9393589c-0c1e-42e1-856f-a29299fb50d2', '2024-01-25', NULL, NULL, NULL, 'isaacnegreiros10@gmail.com', 'e0443df312abef9e05c2f5efe60f3ceaac48202483c8cb429dbcbcb3ee1f9ad8')﻿,
('your_user_id_1', '2024-01-20', 'John', 'Doe', 'john_doe', 'john.doe@example.com', NULL)﻿,
('your_user_id_2', '2024-01-20', 'Jane', 'Smith', 'jane_smith', 'jane.smith@example.com', NULL)﻿;
﻿
--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room_user`
--
ALTER TABLE `room_user`
  ADD PRIMARY KEY (`roomId`,`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);
﻿COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
