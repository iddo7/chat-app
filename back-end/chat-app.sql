-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 20, 2024 at 07:19 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chat-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` varchar(255) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `roomId` varchar(255) NOT NULL,
  `authorId` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `isCore` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf16le COLLATE=utf16le_general_ci;

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

-- --------------------------------------------------------

--
-- Table structure for table `room_user`
--

CREATE TABLE `room_user` (
  `roomId` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf16le COLLATE=utf16le_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16le COLLATE=utf16le_general_ci;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


-- Insert into messages
INSERT INTO `messages` (`id`, `createdAt`, `roomId`, `authorId`, `content`, `isCore`) VALUES
('your_message_id_1', '2024-01-20', 'your_room_id_1', 'your_author_id_1', 'Your message content 1', 0),
('your_message_id_2', '2024-01-20', 'your_room_id_2', 'your_author_id_2', 'Your message content 2', 1);

-- Insert into rooms
INSERT INTO `rooms` (`id`, `createdAt`, `name`, `imageUrl`) VALUES
('your_room_id_1', '2024-01-20', 'Room 1', 'room1_image_url'),
('your_room_id_2', '2024-01-20', 'Room 2', 'room2_image_url');

-- Insert into room_user
INSERT INTO `room_user` (`roomId`, `userId`, `createdAt`) VALUES
('your_room_id_1', 'your_user_id_1', '2024-01-20'),
('your_room_id_1', 'your_user_id_2', '2024-01-20');

-- Insert into users
INSERT INTO `users` (`id`, `createdAt`, `firstName`, `lastName`, `username`, `email`) VALUES
('your_user_id_1', '2024-01-20', 'John', 'Doe', 'john_doe', 'john.doe@example.com'),
('your_user_id_2', '2024-01-20', 'Jane', 'Smith', 'jane_smith', 'jane.smith@example.com');
