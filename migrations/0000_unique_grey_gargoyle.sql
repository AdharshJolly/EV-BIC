CREATE TABLE `registrations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`participant1_name` text NOT NULL,
	`participant2_name` text,
	`email` text NOT NULL,
	`phone_number` text NOT NULL,
	`college_name` text NOT NULL,
	`state` text NOT NULL,
	`city` text NOT NULL,
	`is_bangalore_based` integer NOT NULL,
	`will_attend_in_person` integer,
	`created_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `registrations_email_unique` ON `registrations` (`email`);