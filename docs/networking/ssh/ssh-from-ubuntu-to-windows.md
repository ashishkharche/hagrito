---
sidebar_label: SSH from Ubuntu to Windows
description: SSH from Ubuntu to Windows.
---

# SSH from Ubuntu to Windows

## Install OpenSSH server

In Optional Features on Windows,

Find OpenSSH Server, then click Install

or

## Install via Terminal

In Powershell

```
# Install the OpenSSH Server
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```

## Check status of OpenSSH server installation

In Powershell, admin mode.

```
Get-WindowsCapability -Online | Where-Object Name -like 'OpenSSH*'
```

[Get started with OpenSSH | Microsoft Docs](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse)

## Configure SSH server

```
# Start the sshd service
Start-Service sshd

# OPTIONAL but recommended:
Set-Service -Name sshd -StartupType 'Automatic'

# Confirm the Firewall rule is configured. It should be created automatically by setup. Run the following to verify
if (!(Get-NetFirewallRule -Name "OpenSSH-Server-In-TCP" -ErrorAction SilentlyContinue | Select-Object Name, Enabled)) {
    Write-Output "Firewall Rule 'OpenSSH-Server-In-TCP' does not exist, creating it..."
    New-NetFirewallRule -Name 'OpenSSH-Server-In-TCP' -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22
} else {
    Write-Output "Firewall rule 'OpenSSH-Server-In-TCP' has been created and exists."
}
```

## Open Ubuntu

```
ssh windowsusername@ipaddress
```

For password, add you account password. Could be your email password.