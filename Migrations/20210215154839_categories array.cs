using Microsoft.EntityFrameworkCore.Migrations;

namespace ASPReactApp.Migrations
{
    public partial class categoriesarray : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "Tests",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "GuestId",
                table: "Tests",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tests_GuestId",
                table: "Tests",
                column: "GuestId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tests_Guests_GuestId",
                table: "Tests",
                column: "GuestId",
                principalTable: "Guests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tests_Guests_GuestId",
                table: "Tests");

            migrationBuilder.DropIndex(
                name: "IX_Tests_GuestId",
                table: "Tests");

            migrationBuilder.DropColumn(
                name: "Category",
                table: "Tests");

            migrationBuilder.DropColumn(
                name: "GuestId",
                table: "Tests");
        }
    }
}
