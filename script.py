import eel
import mysql.connector

eel.init("web")
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="billing_sys"
)
conn.cursor()


@eel.expose
def insert(uid, iName, iPrice, amount):

    itemId = str(uid)
    itemName = str(iName)
    itemPrice = str(iPrice)
    amount = str(amount)
    insertcursor = conn.cursor()

    sql = (
        "INSERT INTO `billing`(`id`, `itemName`, `itemPrice`, `amount`) VALUES (%s,%s,%s,%s)")
    insertcursor.execute(sql, (itemId, itemName, itemPrice, amount))


@eel.expose
def deleteItem(itemid):
    # iId = int(itemid)
    deletecursor = conn.cursor()
    sql = ("DELETE FROM `billing` WHERE id = %s")
    deletecursor.execute(sql, (itemid,))
    conn.commit()
    print(deletecursor.rowcount, "record(s) deleted")


@eel.expose
def gettableData():
    select_all = """SELECT * FROM billing"""
    cursor = conn.cursor()
    cursor.execute(select_all)
    result = cursor.fetchall()

    updatedTable = []

    tbl = "<tr><td>ID</td><td>Name</td><td>Email</td><td>Phone</td></tr>"
    updatedTable.append(tbl)

    for row in result:
        a = "<tr><td>%s</td>" % row[0]
        updatedTable.append(a)
        b = "<td>%s</td>" % row[1]
        updatedTable.append(b)
        c = "<td>%s</td>" % row[2]
        updatedTable.append(c)
        d = "<td>%s</td></tr>" % row[3]
        updatedTable.append(d)

    return updatedTable


@eel.expose
def updateDb(upToitemId, upToitemName, upToitemPrice, upToitemQuantity):

    newItemId = str(upToitemId)
    newItemName = str(upToitemName)
    newItemPrice = str(upToitemPrice)
    newupQuantity = str(upToitemQuantity)
    updatecursor = conn.cursor()

    sql = (
        "UPDATE `billing` SET `itemName`=%s,`itemPrice`=%s,`amount`=%s WHERE id=%s")
    updatecursor.execute(sql, (newItemName,
                               newItemPrice, newupQuantity, newItemId))
    print(updatecursor.rowcount, "record(s) updated")


eel.start('main.html', mode='edge', size=(600, 200), )    # Start

if __name__ == '__main__':
    insert()
    gettableData()
    deleteItem()
