-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 27-Ago-2016 às 00:02
-- Versão do servidor: 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bonuscred`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `afiliados`
--

CREATE TABLE `afiliados` (
  `nome` varchar(65) NOT NULL,
  `link` varchar(120) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `config`
--

CREATE TABLE `config` (
  `id` int(11) NOT NULL,
  `link` varchar(155) NOT NULL,
  `titulo` varchar(155) NOT NULL,
  `desc` text NOT NULL,
  `img` text NOT NULL,
  `tag` text NOT NULL,
  `link2` varchar(155) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `config`
--

INSERT INTO `config` (`id`, `link`, `titulo`, `desc`, `img`, `tag`, `link2`) VALUES
(1, 'https://bonus-cred.com', 'Bonus Cred BR', 'Teste', 'https://bonus-cred.com', 's', 'https://bonus-cred.com'),
(2, 'https://bonus-cred.com', 'Bonus Cred ES', 'Teste', 'https://bonus-cred.com', 's', 'https://bonus-cred.com'),
(3, 'https://bonus-cred.com', 'Bonus Cred EN', 'Teste', 'https://bonus-cred.com', 's', 'https://bonus-cred.com');

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nome` varchar(155) NOT NULL,
  `img` text NOT NULL,
  `fb_id` bigint(22) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`id`, `nome`, `img`, `fb_id`) VALUES
(10, 'Lucas Willemen', 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/p100x100/11188213_1049003021795361_5376060031008399662_n.jpg?oh=90ba05d7fb66efd5258ff0f33bf2c081', 1367669109928749);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `afiliados`
--
ALTER TABLE `afiliados`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `config`
--
ALTER TABLE `config`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `fb_id` (`fb_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `afiliados`
--
ALTER TABLE `afiliados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `config`
--
ALTER TABLE `config`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
