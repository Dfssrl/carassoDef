-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Creato il: Ott 12, 2025 alle 12:59
-- Versione del server: 10.6.22-MariaDB-cll-lve
-- Versione PHP: 8.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `s2846fa6_carasso`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `appStati`
--

CREATE TABLE `appStati` (
  `id` int(11) NOT NULL,
  `descrizione` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `appuntamenti`
--

CREATE TABLE `appuntamenti` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idSalone` int(11) NOT NULL,
  `isStato` int(11) NOT NULL,
  `data` date DEFAULT NULL,
  `ora` time DEFAULT NULL,
  `invioAcconto` tinyint(4) NOT NULL DEFAULT 0,
  `dataAcconto` date DEFAULT NULL,
  `oraAcconto` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `cabine`
--

CREATE TABLE `cabine` (
  `id` int(11) NOT NULL,
  `idsalone` int(11) NOT NULL,
  `descrizione` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `clienti`
--

CREATE TABLE `clienti` (
  `id` int(11) NOT NULL,
  `iduser` int(11) NOT NULL DEFAULT 0,
  `rag_soc` varchar(40) NOT NULL,
  `indirizzo` varchar(50) DEFAULT NULL,
  `cap` varchar(10) DEFAULT NULL,
  `comune` varchar(40) DEFAULT NULL,
  `provincia` varchar(2) DEFAULT NULL,
  `c_f` varchar(20) DEFAULT NULL,
  `p_iva` varchar(20) DEFAULT NULL,
  `sdi` varchar(10) DEFAULT NULL,
  `eliminato` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `recuperaPassword`
--

CREATE TABLE `recuperaPassword` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `token` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `saloni`
--

CREATE TABLE `saloni` (
  `id` int(11) NOT NULL,
  `iduser` int(11) NOT NULL DEFAULT 0,
  `rag_soc` varchar(40) NOT NULL,
  `indirizzo` varchar(50) DEFAULT NULL,
  `cap` varchar(10) DEFAULT NULL,
  `comune` varchar(40) DEFAULT NULL,
  `provincia` varchar(2) DEFAULT NULL,
  `c_f` varchar(20) DEFAULT NULL,
  `p_iva` varchar(20) DEFAULT NULL,
  `sdi` varchar(10) DEFAULT NULL,
  `eliminato` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `ruolo` tinyint(4) NOT NULL DEFAULT 0,
  `eliminato` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dump dei dati per la tabella `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `ruolo`, `eliminato`) VALUES
(1, 'callcenter', 'danielefaverosolution@gmail.com', '', 6, 0);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `appStati`
--
ALTER TABLE `appStati`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `appuntamenti`
--
ALTER TABLE `appuntamenti`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `cabine`
--
ALTER TABLE `cabine`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `clienti`
--
ALTER TABLE `clienti`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `recuperaPassword`
--
ALTER TABLE `recuperaPassword`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `saloni`
--
ALTER TABLE `saloni`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `appStati`
--
ALTER TABLE `appStati`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `appuntamenti`
--
ALTER TABLE `appuntamenti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `cabine`
--
ALTER TABLE `cabine`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `clienti`
--
ALTER TABLE `clienti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `recuperaPassword`
--
ALTER TABLE `recuperaPassword`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `saloni`
--
ALTER TABLE `saloni`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
