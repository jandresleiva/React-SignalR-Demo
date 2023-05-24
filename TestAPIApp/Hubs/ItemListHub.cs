using Microsoft.AspNetCore.SignalR;
using TestAPIApp.Models;

namespace TestAPIApp.Hubs
{
    public class ItemListHub : Hub<IItemListClients>
    {
        public async override Task OnConnectedAsync()
        {
            var token = Context.GetHttpContext().Request.Query["token"];
            var connectionId = Context.GetHttpContext().Connection.Id;
            //_connections.Add(name, Context.ConnectionId);
            Console.WriteLine("Connection made by: " + token + " with Id: " + connectionId);

            await base.OnConnectedAsync();
        }

        public async override Task OnDisconnectedAsync(Exception exception)
        {
            //_connections.Add(name, Context.ConnectionId);
            //Console.WriteLine("Disconnected made by: " + name);

            await base.OnConnectedAsync();
        }
    }
}
